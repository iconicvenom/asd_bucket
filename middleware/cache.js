const cache = new Map();
const TTL = 60 * 1000;

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  const entry = cache.get(key);

  if (entry) {
    const expired = Date.now() - entry.createdAt >= TTL;

    if (!expired) {
      res.set('X-Cache', 'HIT');
      return res.json(entry.data);
    }

    cache.delete(key);
  }

  res.set('X-Cache', 'MISS');

  const originalJson = res.json.bind(res);
  res.json = (data) => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      cache.set(key, {
        data,
        createdAt: Date.now()
      });
    }
    return originalJson(data);
  };

  next();
};

const invalidateCache = (req, res, next) => {
  res.on('finish', () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      cache.clear();
    }
  });
  next();
};

module.exports = { cacheMiddleware, invalidateCache };

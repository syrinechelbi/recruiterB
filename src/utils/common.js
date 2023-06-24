const routeAction = (fn, middlewares = []) => {
    return async (req, res) => {
      try {
        for (const middleware of middlewares) {
          await middleware(req, res);
        }
        await fn(req, res);
      } catch (error) {
        console.error('Error executing route action:', error);
        res.status(500).json({ error: 'An error occurred while executing the route action' });
      }
    };
  };
  
  module.exports = {
    routeAction
  };
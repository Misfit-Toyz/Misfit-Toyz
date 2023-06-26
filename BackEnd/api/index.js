apiRouter.get('/health', (req, res, next) => {
  res.send({ message: 'All is good on /api/health!' });
});
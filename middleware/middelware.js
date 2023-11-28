const allowedIps = ['3.75.158.163', '3.125.183.140', '35.157.117.28'];

const ipFilter = (req, res, next) => {
  const clientIp = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (allowedIps.includes(clientIp)) {
    next();
  } else {
    res.status(403).send('Acceso denegado');
  }
};

module.exports = { ipFilter };

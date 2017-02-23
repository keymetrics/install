module.exports = {
  apps : [],
  deploy : {
    production : {
      user : "sigma",
      host : "ssh.km",
      ref  : "origin/master",
      repo : "git@github.com:keymetrics/install.git",
      path : "/var/www/install",
      path : "/var/www/production",
      "post-deploy" : "pm2 startOrRestart ecosystem.json --env production"
    }
  }
}

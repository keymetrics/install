{
  /**
   * This is a sample configuration file for PM2
   */

  /**
   * Here we declare the apps that must be managed by PM2
   * All options are listed here:
   * https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#json-app-declaration
   *
   */
  apps : [],

  /**
   * PM2 help you to deploy apps over your servers
   * For more help go to :
   * https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#deployment-pm2--090
   */
  deploy : {
    production : {
      user : "node",
      host : "212.83.163.168",
      ref  : "origin/master",
      repo : "git@github.com:keymetrics/install.git",
      path : "/var/www/install",
      "post-deploy" : "pm2 startOrRestart ecosystem.json --env production"
    }
  }
}

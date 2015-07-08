var commands = {};
var commander = require('commander');

/**
 * 注册子命令
 * @param    {String}     cmd  子命令名称
 * @param    {[String]}   id   子命令模块id
 * @example  cli.reg('install')
 * @example  cli.reg('install', 'installGlobal')
 */
exports.reg = function(cmd, id, config){
    commands[cmd] = true;
    require(id)(commander, config);
    return this;
}

/**
 * 命令参数预处理
 * @param    {Array}   args  process.argv
 * @example  cli.parse(process.argv)
 */
exports.parse = function(args){
    if(args.length === 2){
        return args.push('--help')
    }
}

/**
 * 执行cli命令
 * @param    {Array}   args  process.argv
 * @example  [example]
 */
exports.run = function(args){
    commander
        .version('0.0.1')
        .option('-V --version', 'change the working directory')
        .action(function(env){
            if(!commands[env]){
                commander.help();
            }
        })

    this.parse(args);
    commander.parse(args);
    return this;
}

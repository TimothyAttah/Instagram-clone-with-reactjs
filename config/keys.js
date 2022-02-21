if(process.env === 'prod'){
  require('./prod')
}else{
  require('./dev')
}

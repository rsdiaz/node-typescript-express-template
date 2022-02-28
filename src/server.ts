import errorHandler from 'errorhandler'
import app from './app'

if(process.env.NODE_ENV === 'development') {
  app.use(errorHandler())  
}

const server = app.listen(3000, () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  )
  console.log('  Press CTRL-C to stop\n')
})

export default server

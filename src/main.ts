/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import morgan from 'morgan';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/modules/app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
/**
 * Main entry point of the application
 * @returns Nothing
 */
async function bootstrap() {
  // Http Server
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
    })
  );

  /**
   * Configuration of the Swagger document
   */
  const config = new DocumentBuilder()
    .setTitle('parloa service')
    .setDescription('A service to find the best matched customers to invite to the Parloa anniversary application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  try {
    const configService = app.get(ConfigService);
    const NODE_PORT = configService.get('NODE_PORT');
    if (!NODE_PORT) {
      throw new Error('Please define the node port as an environmental variable');
    }
    await app.listen(NODE_PORT, () => Logger.log('HTTP Service is listening on port ' + String(NODE_PORT), 'App'));
  } catch (error) {
    console.log(error);

    return;
  }
}
//==================================================================================================================================
bootstrap();

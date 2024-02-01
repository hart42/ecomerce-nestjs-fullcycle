import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
        {
            "id": "153d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 1",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 100
        },
        {
            "id": "253d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 2",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 200
        },
        {
            "id": "353d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 4",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 300
        },
        {
            "id": "453d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 3",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 400
        },
        {
            "id": "553d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 5",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 500
        },
        {
            "id": "653d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 6",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 600
        },
        {
            "id": "753d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 7",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 700
        },
        {
            "id": "853d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 8",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 800
        },
        {
            "id": "953d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 9",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 900
        },
        {
            "id": "103d8d60-8c0e-461f-8f43-7e5fffb434ea",
            "name": "Product 10",
            "description": "1 product description",
            "image_url": "this_is_an_URL",
            "price": 1000
        }
    ]);

    await app.close();
}
bootstrap();

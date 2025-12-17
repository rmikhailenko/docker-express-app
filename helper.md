<!-- flow with dockerfile -->
Dockerfile → (docker build) → Image → (docker run) → Container

<!-- build image -->
docker build -t docker-express-app-image . 

<!-- run docker container with volume (-v); on port (-p); from image (docker-express-app-image); container name(--name); use .env file from app directory (--env-file ./.env) -->
docker run -v $(pwd):/app -p 7001:7001 --env-file ./.env -d --name docker-express-app docker-express-app-image

<!-- delete container with force flag (-f); no need to stop with -f flag; delete container with associate volume (-fv)  -->
 docker rm docker-express-app -f  

<!-- get access to /app directory in container  -->
docker exec -it docker-express-app bash   

<!-- display list of ran containers with -a flag displays list of all containers -->
docker ps

<!-- display list of ran volumes -->
docker volume ls

<!-- run docker container based on docker-compose.yaml file; yaml file is config -->
docker-compose up 

<!-- by default docker compose up used rebuilt image, to force build image after changes use (--build) -->
docker-compose up -d --build

<!-- down docker container ran with docker-compose; flag (-v) removes associate volume -->
docker-compose down -v

<!-- In case if prod and dev docker compose file created 
(docker-compose.prod.yml, docker-compose.dev.yml) pass 2 argument(order matters): -->
docker-compose -f ./docker-compose.yml -f docker-compose.dev.yml -d up

<!-- to get logs use with container name -->
docker logs container-name

<!-- to get network information use with container name -->
docker inspect container-name
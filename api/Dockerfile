FROM maven
WORKDIR /usr/src/app
COPY pom.xml ./
COPY . .
RUN mvn clean install
EXPOSE 8080
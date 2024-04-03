FROM gradle:8.6-jdk17-alpine AS builder
COPY --chown=gradle:gradle . /gradle/
WORKDIR /gradle:8.6

FROM openjdk:17-alpine
RUN mkdir /app
COPY --from=builder /gradle/build/libs/*.jar /app/app.jar
ARG PROFILE
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
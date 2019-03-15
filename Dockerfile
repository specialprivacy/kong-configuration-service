FROM alpine

# bash is necessary for the wait-for-it script
# git, go and musl-dev are necessary to install and run gongfig
RUN apk add --update bash git go musl-dev

ENV GOPATH="$HOME/go"
ENV PATH="$GOPATH/bin:/usr/local/go/bin:$PATH"
ENV KEYCLOAK_ENDPOINT="https://demonstrator-special.tenforce.com:81"

RUN go get "github.com/romanovskyj/gongfig"

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh


COPY config.json /config.json
RUN echo "Setting Keycloak endpoint to $KEYCLOAK_ENDPOINT" & sed -i "s#PLACEHOLDER_KEYCLOAK_ENDPOINT#$KEYCLOAK_ENDPOINT#g" /config.json

BUILD_PATH = ./public/
YEAR = 2020
TIME = $(shell date +'%Y%m%d-%H%M%S')

configure:
	npm install -g gatsby-cli@2.8.2
	yarn install

dev-server:
	gatsby develop

translations:
	echo "Pending migration to GatsbyJS"

translations-upload:
	echo "Pending migration to GatsbyJS"

translations-download:
	echo "Pending migration to GatsbyJS"

build: configure
	gatsby build

pre-deploy: build
	find $(BUILD_PATH) -type f -name 'index.html' -exec \
	sed -i "s/main\.css/main\.css\?$(TIME)/g" {} \;

deploy-to-staging: pre-deploy
	rsync -zav --progress --delete $(BUILD_PATH) $(SSH_USER)@$(SSH_HOST):staging.agilebrazil.com/$(YEAR)/

deploy-to-production: pre-deploy
	#rsync -zav --progress --delete $(BUILD_PATH) $(SSH_USER)@$(SSH_HOST):agilebrazil.com/$(YEAR)/

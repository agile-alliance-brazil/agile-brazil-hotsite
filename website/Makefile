BUILD_PATH = ./public/
YEAR = 2020

configure:
	npm install -g gatsby-cli@2.8.2
	yarn install

dev-server:
	gatsby develop -H 0.0.0.0 -p 8000

translations:
	echo "Pending migration to GatsbyJS"

translations-upload:
	echo "Pending migration to GatsbyJS"

translations-download:
	echo "Pending migration to GatsbyJS"

build: configure
	rm -rf .cache public
	gatsby build

deploy-to-staging: build
	rsync -zav --progress --delete $(BUILD_PATH) $(SSH_USER)@$(SSH_HOST):staging.agilebrazil.com/$(YEAR)/

deploy-to-production: build
	#rsync -zav --progress --delete $(BUILD_PATH) $(SSH_USER)@$(SSH_HOST):agilebrazil.com/$(YEAR)/

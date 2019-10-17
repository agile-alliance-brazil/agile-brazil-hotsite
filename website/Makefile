BUILD_PATH = ./build/agile-brazil-hotsite/
YEAR = 2020
TIME = $(shell date +'%Y%m%d-%H%M%S')

configure:
	npm install -g gatsby-cli@2.8.2
	yarn install

dev-server:
	gatsby develop

translations:
	yarn write-translations

translations-upload:
	crowdin --config ../crowdin.yaml upload sources --auto-update -b master

translations-download:
	crowdin --config ../crowdin.yaml download -b master

build: configure
	yarn build

pre-deploy: build
	find $(BUILD_PATH) -type f -name 'index.html' -exec \
	sed -i "s/main\.css/main\.css\?$(TIME)/g" {} \;

deploy-to-staging: pre-deploy
	rsync -zav --progress --delete $(BUILD_PATH) $(SSH_USER)@$(SSH_HOST):staging.agilebrazil.com/$(YEAR)/

deploy-to-production: pre-deploy
	#rsync -zav --progress --delete $(BUILD_PATH) $(SSH_USER)@$(SSH_HOST):agilebrazil.com/$(YEAR)/

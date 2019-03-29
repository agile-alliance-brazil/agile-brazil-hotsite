BUILD_PATH = ./build/agile-brazil-hotsite/
YEAR = 2019
TIME = $(shell date +'%Y%m%d-%H%M%S')

configure:
	yarn install

dev-server:
	yarn start

crowdin-upload:
	crowdin --config ../crowdin.yaml upload sources --auto-update -b master

crowdin-download:
	crowdin --config ../crowdin.yaml download -b master

write-translations:
	yarn write-translations

build: configure
	yarn build

pre-deploy: build
	find $(BUILD_PATH) -type f -name 'index.html' -exec \
	sed -i "s/main\.css/main\.css\?$(TIME)/g" {} \;

deploy-to-staging: pre-deploy
	rsync -zav --progress --delete $(BUILD_PATH) $(SSH_USER)@$(SSH_HOST):staging.agilebrazil.com/$(YEAR)/

deploy-to-production: pre-deploy
	rsync -zav --progress --delete $(BUILD_PATH) $(SSH_USER)@$(SSH_HOST):agilebrazil.com/$(YEAR)/
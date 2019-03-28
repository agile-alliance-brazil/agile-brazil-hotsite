BUILD_PATH = ./build/agile-brazil-hotsite/
YEAR = 2019
TIME = $(shell date +'%Y%m%d-%H%M%S')

.PHONY: build pre-deploy deploy-to-staging deploy-to-prod

build:
	yarn build

pre-deploy: build
	find $(BUILD_PATH) -type f -name 'index.html' -exec \
	sed -i "" "s/main\.css/main\.css\?$(TIME)/g" {} \;

deploy-to-staging: pre-deploy
	rsync -zav --progress --delete $(BUILD_PATH) $(SSH_HOST):staging.agilebrazil.com/$(YEAR)/

deploy-to-prod: pre-deploy
	rsync -zav --progress --delete $(BUILD_PATH) $(SSH_HOST):agilebrazil.com/$(YEAR)/
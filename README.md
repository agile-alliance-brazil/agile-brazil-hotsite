Agile Brazil Hotsite
=================
[![CircleCI](https://circleci.com/gh/agile-alliance-brazil/agile-brazil-hotsite.svg?style=svg&circle-token=d02c5ec05e9195f29afbb4177eaeca978de28f09)](https://circleci.com/gh/agile-alliance-brazil/agile-brazil-hotsite)

Repository for Agile Brazil website at https://www.agilebrazil.com/

## Old websites downloaded with

https://github.com/hartator/wayback-machine-downloader

    docker pull hartator/wayback-machine-downloader
    docker run --rm -it -v $PWD/websites:/websites hartator/wayback-machine-downloader http://www.agilebrazil.com/2018/ -f 20180807005015
    docker run --rm -it -v $PWD/websites:/websites hartator/wayback-machine-downloader http://www.agilebrazil.com/2017/ -f 20171211041111
    docker run --rm -it -v $PWD/websites:/websites hartator/wayback-machine-downloader http://www.agilebrazil.com/2015/ -f 20170203113140

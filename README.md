agile_brazil_site
=================

Repository for Agile Brazil website at https://agilebrazil.com/

## Old websites downloaded with

https://github.com/hartator/wayback-machine-downloader

    docker pull hartator/wayback-machine-downloader
    docker run --rm -it -v $PWD/websites:/websites hartator/wayback-machine-downloader http://www.agilebrazil.com/2018/ -f 20180807005015
    docker run --rm -it -v $PWD/websites:/websites hartator/wayback-machine-downloader http://www.agilebrazil.com/2015/ -f 20170203113140
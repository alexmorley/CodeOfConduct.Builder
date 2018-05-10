<img src="/app/assets/images/logo.png" width="25%" alt="Code of Conduct Builder Logo">

A set of clickable options to build the perfect Code of Conduct for your event/community/organisation.

Check out it out at [http://codeofconduct.io](http://codeofconduct.io).

## Contributing
Yay! Come help. Check out the [issues](https://github.com/alexmorley/CodeOfConduct.Builder/issues). The easiest way to serve the website locally is to follow the development guidlines below. Let me know if there are any hitches there!

Also I try to use the branching model described [here](http://nvie.com/posts/a-successful-git-branching-model/). Don't worry about it too much but the main thing is to make pull requests against the develop branch. Not master!

We expect everyone to follow [our own code of conduct](./CODE_OF_CONDUCT.md) as well as the [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/).


## Development

**Hopefully we can make this even easier (and remove the need to download docker, which is probably overkill...) - See Issue #50**

To get a local version of this website on your computer *should* be as easy as:
- install [Docker](docker.io) community edition
```
git clone https://github.com/alexmorley/CodeOfConduct.Builder.git #clone this project
cd CodeOfConduct.Builder # go to project folder
git checkout develop # checkout the development branch
git checkout -b my-new-feature # create a feature branch for your changes 
./run_docker.sh #run the docker image # this will require admin permissions
./chg_permissions # to make edits / commit your changes you might have to do this too... 
```

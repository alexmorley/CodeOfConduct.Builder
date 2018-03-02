# CodeOfConduct.Builder

A set of clickable options to build the perfect Code of Conduct for your event/community/organisation.

## Contributing
Yay! Come help. Check out the [issues](https://github.com/alexmorley/CodeOfConduct.Builder/issues). The easiest way to serve the website locally is to follow the development guidlines below. Let me know if there are any hitches there!

Also I try to use the branching model described [here](http://nvie.com/posts/a-successful-git-branching-model/). Don't worry about it too much but the main thing is to make pull requests against the develop branch. Not master!

We expect everyone to follow [our own code of conduct](https://www.mozilla.org/en-US/about/governance/policies/participation/) as well as the [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/).

## Development
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

## Admin
### Before v0.1 Release
- [ ] Add https
- [ ] Add a couple of codes of conduct that aren't open source / conference related

### Features
- [ ] Add "serve" button to create webpage with this CoC
- [ ] Better text editor?
    - https://www.tinymce.com/docs/demo/basic-example/
    - quilljs https://quilljs.com/
- [ ] Do conversion from Download button, have something to indicate conversion.
- [ ] browser version which requires signess to enter email address
  - [ ] some form of checking engagment: click through? quiz?

### Whiteboard
- develop in glitch or thimble? might be too late now
- fork this guy? https://github.com/cbetta/hackcoc ? Need to ask them for proper license/permission

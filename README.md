# CodeOfConduct.Builder

A set of clickable options to build the perfect Code of Conduct for your event/community/organisation

## Development
To get a local version of this website on your computer *should* be as easy as:
- install [Docker](docker.io) community edition
```
mkdir sitedir; cd sitedir # go to a fresh directory
git clone https://github.com/alexmorley/CodeOfConduct.Builder.git #clone this project to a folder named app
git checkout develop # checkout the development branch
git checkout -b my-new-feature # create a feature branch for your changes 
sudo docker run -i -t -p "8888:80" -v ${PWD}/app:/app alexmorley/codeofconduct.io #run the docker image
```

## Admin
### Before v0.1 Release
- [X] Codify one or two CoCs (JSON?)
- [X] Create a split screen with options & CoC on right
- [X] Use options to modify right screen
- [X] add an edit button to fields on the right frame
- [X] Set up a cloud instance
- [X] Register domain name
- [X] Add save as pdf/docx/odt/html button. WIP
  - [X] export html of right frame to save
  - [X] test pandoc
  - [X] install pandoc
  - [X] force download https://boutell.com/newfaq/creating/forcedownload.html
  - [X] Change to Convert to dropdown then Download Buttons
  - [X] need a callback for when conversion is done or better would be to make sure the conversion and download are done in one call, also need to give file random name and delete after.
- [X] More robust way of handling temp files during conversion
- [X] ADMIN: implement git-flow branches on repo
  - [X] Merge this into master
  - [X] Tag release
  - [X] Create develop/hotfix/feature branches
- [ ] Add https
- [ ] Landing page with:
  - [ ] Why do I need a code of conduct link
  - [ ] About/Licensing/Attribution
- [X] Add reporting section + one more CoC

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

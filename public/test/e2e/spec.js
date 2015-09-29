describe('Controller: MainCtrl', function() {
  beforeEach(function() {
      browser.get('/');
    });

  it('should attach a list of awesomeThings to the scope', function () {
    var awesomeList = element.all(by.repeater('thing in awesomeThings'));
    var query = element(by.model('query'));

    expect(awesomeList.count()).toBe(5);

    query.sendKeys('Lisa');
    expect(awesomeList.count()).toBe(1);

    query.clear();
    query.sendKeys('Zyra');
    expect(awesomeList.count()).toBe(1);

    query.clear();
    query.sendKeys('LieveLaurent');
    expect(awesomeList.count()).toBe(0);

  });

  it('should be possible to controle awesomeThings order via the select box', function(){
    var awesomeName = element.all(by.repeater('thing in awesomeThings').column('thing.name'));
    var query = element(by.model('query'));

    function getNames(){
      return awesomeName.map(function(elm){
        return elm.getText();
      });
    }

    query.sendKeys('Winckel');

      expect(getNames()).toEqual([
          "Lisa Van Winckel",
          "Laurent Van Winckel"
        ]);

    element(by.model('sortProp')).element(by.css('option[value="age"]')).click();

      expect(getNames()).toEqual([
          "Lisa Van Winckel",
          "Laurent Van Winckel"
        ]);
  });


  it('should render name specific links', function(){
    var query = element(by.model('query'));
    query.sendKeys('Joke Gysen');
    element.all(by.css('.names li a')).first().click();
    browser.getLocationAbsUrl().then(function(url){
      expect(url).toBe('/names/joke-gysen');
    });
  });

 /* it('should redirect to home', function(){
    browser.get('/index.html');
    browser.getLocationAbsUrl().then(function(url){
      expect(url).toEqual('/');
    });
  });*/

});

describe('Name detail view', function(){
  beforeEach(function(){
    browser.get('/#/names/joke-gysen');
  });

  it('should display joke gysen page', function(){
    expect(element(by.binding('thing.name')).getText()).toBe('Joke Gysen');
  });

  it('should display 2 thumbnail images', function(){
    var img = element.all(by.css('.thumbnail'));
    expect(img.count()).toBe(4);
  });

  it('should display the first name image as the main name image', function(){
    expect(element(by.css('img.name')).getAttribute('src')).toMatch('/images\/joke.png');
  });

  it('should swap main image if a thumbnail image is clicked', function(){
    element(by.css('.name-thumbs li:nth-child(3) img')).click();
    expect(element(by.css('img.name')).getAttribute('src')).toMatch('/images\/mom.png');

    element(by.css('.name-thumbs li:nth-child(2) img')).click();
    expect(element(by.css('img.name')).getAttribute('src')).toMatch('/images\/robot.png');
  });
});
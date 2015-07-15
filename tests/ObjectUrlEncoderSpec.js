describe('ObjectUrlEncoder', function(){
    var encode = ObjectUrlEncoder;

    it('scalar', function(){
        expect(encode({hoge: 'foo'})).toEqual('hoge=foo');
        expect(encode({hoge: 1})).toEqual('hoge=1');
    });

    it('array', function(){
        expect(encode({hoge: [1,2,3]})).toEqual('hoge[]=1&hoge[]=2&hoge[]=3');
    });

    it('object', function(){
        expect(encode({hoge: {foo: 'bar'}})).toEqual('hoge[foo]=bar');
    });

    it('function - ignored', function(){
        expect(encode({hoge: function(){}, foo: 'bar'})).toEqual('foo=bar');
    });

    it('prefix must be string', function(){
        expect(encode({hoge: 'foo'}, function(){})).toEqual('hoge=foo');
    });
});

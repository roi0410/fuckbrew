var blacklist = ['いかがでしたか？', 'いかがでしたでしょうか？','いかがでしたか?','いかがでしたでしょうか?']

$.each(blacklist,function(index,val){
	var text = $("div.itemsShowBody").text();
	if (text.indexOf(val) != -1)
	{
		var ret = confirm("以下の文字列が本文中に見つかりました: " + val + "\nページの表示を中止しますか？");
		if (ret)
		{
			history.back();
		}
	}
});

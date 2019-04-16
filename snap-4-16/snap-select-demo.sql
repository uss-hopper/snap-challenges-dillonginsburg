select
	tweetContent,
	'like'.likeDate,
	pofile.profileAtHandle
	from tweet
	inner join 'like' on 'like'.likeTweetId = tweet.tweetId
	inner join profile on profile.profileId = 'like'.likeProfileId
	where tweet.tweetId = hex('0536faef082b454e9d444cdbe7887d7a');
<?php


public static function getTweetByTweetDate(\PDO $pdo, DateTime $tweetDate) : \SplFixedArray {

	startDateString= $tweetDate->format('y-m-d') . ('00:00:00');
	// create query template
	$query = "SELECT tweetId, tweetProfileId, tweetContent, tweetDate FROM tweet WHERE tweetDate>= :startDate AND tweetDate <endDate = :tweetDate";
	
	$statement = $pdo->prepare($query);
	// bind the tweet profile id to the place holder in the template
	$parameters = ["tweetDate" => $tweetDate->getBytes()];
	$statement->execute($parameters);
	// build an array of tweets
	$tweets = new \SplFixedArray($statement->rowCount());
	$statement->setFetchMode(\PDO::FETCH_ASSOC);
	while(($row = $statement->fetch()) !== false) {
		try {
			$tweet = new Tweet($row["tweetId"], $row["tweetProfileId"], $row["tweetContent"], $row["tweetDate"]);
			$tweets[$tweets->key()] = $tweet;
			$tweets->next();
		} catch(\Exception $exception) {
			// if the row couldn't be converted, rethrow it
			throw(new \PDOException($exception->getMessage(), 0, $exception));
		}
	}
	return($tweets);
}


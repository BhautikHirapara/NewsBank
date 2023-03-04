import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =[
    {
    "source": {
    "id": null,
    "name": "DW (English)"
    },
    "author": "Deutsche Welle",
    "title": "Biden thanks Scholz for 'profound' German support on Ukraine - DW (English)",
    "description": "German Chancellor Olaf Scholz and President Biden praised transatlantic unity and vowed to keep up their joint cooperation to support Ukraine during Scholz's visit to the White House.",
    "url": "https://www.dw.com/en/biden-thanks-scholz-for-profound-german-support-on-ukraine/a-64871568",
    "urlToImage": "https://static.dw.com/image/64883589_6.jpg",
    "publishedAt": "2023-03-04T05:22:00Z",
    "content": "German Chancellor Olaf Scholz held private talks with US President Joe Biden in the White House on Friday amid concerns that China may start sending weapons to Russia.\r\nScholz said cooperation with t… [+3312 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Dallas Morning News"
    },
    "author": "Zaeem Shaikh",
    "title": "3 children killed, 2 wounded at Ellis County home, officials say - The Dallas Morning News",
    "description": "A suspect was in custody, according to the Ellis County Sheriff’s Office, and officials did not believe there was any danger to the community.",
    "url": "https://www.dallasnews.com/news/crime/2023/03/03/3-children-killed-2-people-wounded-at-ellis-county-home-officials-say/",
    "urlToImage": "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/ET06IFoPpMzbWHd70S6eTYxH2LM=/1200x630/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/O4HGFFIUKNFMDG2G7XBQC5D464.jpg",
    "publishedAt": "2023-03-04T05:11:38Z",
    "content": "Three children were killed and two more were wounded at a home in the Ellis County city of Italy on Friday afternoon, authorities said.\r\nA suspect was in custody, according to the Ellis County Sherif… [+5330 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Kylee Miller, Ahmad Bajjey",
    "title": "NEXT Weather Alert: Winter storm system bringing heavy snow to southeast Michigan - CBS News",
    "description": "Heavy snow and rain is moving into southeast Michigan.",
    "url": "https://www.cbsnews.com/detroit/live-updates/next-weather-alert-winter-storm-system-bringing-heavy-snow-to-southeast-michigan/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/03/03/e88d8e8b-a8ad-43d5-9526-979bb2220c3d/thumbnail/1200x630/e581e83cb6e9741e4759c5e1f87d4587/winter-storm-warnings.png",
    "publishedAt": "2023-03-04T04:49:00Z",
    "content": "Timing continues to be more consistent, focusing mainly on the afternoon Friday through most of Friday night.  \r\nThe primary issue is the storm track, which has been all over the board until Wednesda… [+1773 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Variety"
    },
    "author": "Ellise Shafer",
    "title": "Tom Sizemore, ‘Saving Private Ryan’ Actor, Dies at 61 - Variety",
    "description": "Tom Sizemore has died after being taken off life support, his manager Charles Lago confirmed to Variety on Friday. The 61-year-old actor suffered a brain aneurysm on Feb. 18. “It is with grea…",
    "url": "https://variety.com/2023/film/news/tom-sizemore-taken-off-life-support-brain-aneurysm-1235538021/",
    "urlToImage": "https://variety.com/wp-content/uploads/2023/02/tom-sizemore.jpg?w=1000&h=563&crop=1",
    "publishedAt": "2023-03-04T03:41:00Z",
    "content": "Tom Sizemore has died after being taken off life support, his manager Charles Lago confirmed to Variety on Friday. The 61-year-old actor suffered a brain aneurysm on Feb. 18. \r\n“It is with great sadn… [+3218 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Mexico can't match U.S. incentives for proposed Tesla battery plant, minister says - Reuters",
    "description": "Mexico would not be able to match the incentives offered under a U.S. act to tame inflation if Tesla Inc builds a battery plant in the country, Mexico's finance minister said on Friday, days after Tesla announced the construction of a \"gigafactory\" there.",
    "url": "https://www.reuters.com/technology/mexico-cant-match-us-incentives-proposed-tesla-battery-plant-minister-says-2023-03-04/",
    "urlToImage": "https://www.reuters.com/resizer/dM2d1vKiXP8wDAhpLfn1gSSvh8Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4LHVTZSSARM2ZG6B2DUERQLLMI.jpg",
    "publishedAt": "2023-03-04T03:16:00Z",
    "content": "MEXICO CITY, March 3 (Reuters) - Mexico would not be able to match the incentives offered under a U.S. act to tame inflation if Tesla Inc builds a battery plant in the country, Mexico's finance minis… [+1654 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Page Six"
    },
    "author": "Sophia Melissa Caraballo Piñeiro",
    "title": "How Ariana Madix discovered Tom Sandoval was cheating on her with Raquel Leviss - Page Six",
    "description": "Madix had been supporting Sandoval at his concert on Wednesday when she discovered that he was cheating on her. Here’s how.",
    "url": "https://pagesix.com/2023/03/03/how-ariana-madix-discovered-tom-sandoval-was-cheating-on-her-with-raquel-leviss/",
    "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/03/Ariana-Madix-Tom-Sandoval-Raquel-Leviss.jpg?quality=75&strip=all&w=1200",
    "publishedAt": "2023-03-04T03:16:00Z",
    "content": "Ariana Madix discovered Tom Sandoval was cheating on her after she found a sexually explicit video sent by Raquel Leviss on his phone, Page Six can confirm.\r\nMoments after Madix had watched her beau’… [+2888 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hollywood Reporter"
    },
    "author": "Carly Thomas",
    "title": "‘Rachael Ray’ Daytime Talk Show to End After 17 Seasons - Hollywood Reporter",
    "description": "The host said she \"made the decision that it’s time for me to move on to the next exciting chapter in my broadcast career.\"",
    "url": "https://www.hollywoodreporter.com/tv/tv-news/rachael-ray-daytime-talk-show-ending-17-seasons-1235340627/",
    "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/Rachael-Ray-Show-publicity-H-2023.jpg?w=1024",
    "publishedAt": "2023-03-04T03:07:21Z",
    "content": "Rachael Ray, the daytime talk show, will end its run after 17 seasons on the air. \r\nThe decision to end the Emmy-winning program comes after host Rachael Ray recently launched a new production compan… [+1604 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Adam Sabes",
    "title": "Severe weather rocks Southern states bringing high winds, tornadoes, knocking out power for nearly 1 million - Fox News",
    "description": "Severe storms across the South have left nearly 1 million customers without power as high winds and tornadoes went through the region.",
    "url": "https://www.foxnews.com/us/severe-weather-rocks-southern-states-bringing-high-winds-tornadoes-knocking-power-nearly-1-million",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/Untitled-design-541.png",
    "publishedAt": "2023-03-04T02:22:00Z",
    "content": "Severe storms rattled the South in recent days, leaving nearly 1 million customers without power.\r\nThe storm system traveled through Texas, Louisiana, Mississippi, Arkansas, Tennessee, Kentucky, Alab… [+1714 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Greece train crash: families of victims grieve as protests grow - Reuters",
    "description": "Families and friends, dressed in black, clung to each other, in tears, as the coffin of a 34-year-old mother killed in Greece's deadliest train crash was lifted up the stairs of a church on Friday.",
    "url": "https://www.reuters.com/world/europe/strike-protests-greece-anger-grows-over-train-crash-2023-03-03/",
    "urlToImage": "https://www.reuters.com/resizer/te3yFBFVb1fnP-2KIt0vzcQ9Qbk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NDB3XLALJRMGXIAEYOFA75DXCA.jpg",
    "publishedAt": "2023-03-04T02:01:00Z",
    "content": "KATERINI, Greece/ATHENS, March 3 (Reuters) - Families and friends, dressed in black, clung to each other, in tears, as the coffin of a 34-year-old mother killed in Greece's deadliest train crash was … [+4390 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Seeking Alpha"
    },
    "author": "Jessica Kuruthukulangara",
    "title": "Silvergate suspends USD transfer network for crypto, institutional investor clients - Seeking Alpha",
    "description": "Silvergate Capital (SI) said Friday it made a \"risk-based decision\" to discontinue its Silvergate Exchange Network, according to an alert on its website, sending its stock ~2% lower...",
    "url": "https://seekingalpha.com/news/3944193-silvergate-suspends-usd-transfer-network-for-crypto-institutional-investor-clients",
    "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1197955157/image_1197955157.jpg?io=getty-c-w750",
    "publishedAt": "2023-03-04T01:24:24Z",
    "content": "marchmeena29\r\n<ul><li>Silvergate Capital (NYSE:SI) said Friday it made a \"risk-based decision\" to discontinue its Silvergate Exchange Network, according to an alert on its website, sending its stock … [+1048 chars]"
    },
    {
    "source": {
    "id": "bleacher-report",
    "name": "Bleacher Report"
    },
    "author": "Sara Civian",
    "title": "The 6 Biggest Takeaways from a Wild NHL Trade Deadline Week - Bleacher Report",
    "description": "After several weeks of fun that all started when the Islanders acquired Bo Horvat on Jan. 30, the 2023 NHL trade deadline is officially behind us.",
    "url": "https://bleacherreport.com/articles/10067503-the-6-biggest-takeaways-from-a-wild-nhl-trade-deadline-week",
    "urlToImage": "https://media.bleacherreport.com/image/upload/x_0,y_16,w_1795,h_1196,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1677872338/tdwauspemewzwa6nc9er.jpg",
    "publishedAt": "2023-03-04T01:06:48Z",
    "content": "Remember less than two weeks ago when Jimmy Vesey was on the Rangers' first line? No shade to him, but one Kane, one Vladimir Tarasenko and one Kid Line kept intact later, and suddenly he's on the fo… [+1431 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Big Blue View"
    },
    "author": "Chris Pflum",
    "title": "2023 NFL Scouting Combine: Winners from Day 2 cornerback and safety workouts - Big Blue View",
    "description": "Which defensive backs showed out at Indy?",
    "url": "https://www.bigblueview.com/2023/3/3/23624220/2023-nfl-draft-scouting-combine-winners-day-2-corner-safety-workouts-ny-giants-news",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/obu7TRkWOFgGzjHWVEBcuNmCY_M=/0x0:3652x1912/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24477566/1471065421.jpg",
    "publishedAt": "2023-03-04T00:56:36Z",
    "content": "The second day of the 2023 NFL Scouting Combine is in the books, and with it the defensive portion of the on-field workouts. \r\nThe New York Giants secondary was held together by duct tape and bubbleg… [+5937 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Ken Hathaway",
    "title": "UFC 285 video: Jon Jones, Ciryl Gane square up last time at ceremonial weigh-ins - MMA Junkie",
    "description": "Jon Jones and Ciryl Gane faced off one last time before their heavyweight title fight at UFC 285.",
    "url": "https://mmajunkie.usatoday.com/2023/03/ufc-285-video-jon-jones-ciryl-gane-square-up-last-time-at-ceremonial-weigh-ins",
    "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/03/UFC-285-Main-event-faceoff.jpg?w=1024&h=576&crop=1",
    "publishedAt": "2023-03-04T00:45:00Z",
    "content": "LAS VEGAS Jon Jones and Ciryl Gane faced off one final time at Friday’s UFC 285 ceremonial weigh-ins.\r\nJones (26-1 MMA, 20-1 UFC) and Gane (11-1 MMA, 8-1 UFC) will fight for the vacant heavyweight ch… [+429 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Isaac Arnsdorf, Meryl Kornfield",
    "title": "Haley heckled as Trump movement asserts its dominance at shrunken CPAC - The Washington Post",
    "description": "The dustup showed the risks of taking the primary fight to what has clearly become Trump’s home turf.",
    "url": "https://www.washingtonpost.com/politics/2023/03/03/haley-trump-cpac-2024-presidential/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7QBSDR2I3VB727HHBBXHO4NWGA_size-normalized.jpg&w=1440",
    "publishedAt": "2023-03-04T00:28:06Z",
    "content": "Comment on this story\r\nRepublican presidential candidate Nikki Haley stepped into the hallway after speaking at the Conservative Political Action Conference on Friday to supporters asking for selfies… [+6478 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "",
    "title": "Anxiety still looms over East Palestine one month after train derailment - CNN",
    "description": "One month following the train derailment and subsequent chemical spill, residents of East Palestine and the surrounding region are still anxious about the long term effects for themselves, their families, and their businesses. CNN's Miguel Marquez reports.",
    "url": "https://www.cnn.com/videos/health/2023/03/04/east-palestine-derailment-community-impact-one-month-marquez-pkg-vpx.cnn",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230303163657-east-palestine-ohio-train-derailement-site-0302.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-04T00:27:34Z",
    "content": null
    },
    {
    "source": {
    "id": "the-hill",
    "name": "The Hill"
    },
    "author": "Joe Jacquez",
    "title": "Pelosi on DC crime bill: I wish Biden ‘would’ve told us first’ - The Hill",
    "description": "Former House Speaker Nancy Pelosi criticized President Biden’s handling of a GOP-led resolution that would overturn parts of a District of Columbia crime bill, decrying that he should have given Democrats “a heads up.” “If he was going to do it I wish he woul…",
    "url": "https://thehill.com/homenews/house/3883477-pelosi-on-dc-crime-bill-i-wish-biden-wouldve-told-us-first/",
    "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/01/pelosinancy_011223gn_w.jpg?w=1280",
    "publishedAt": "2023-03-04T00:26:00Z",
    "content": "Skip to content\r\nFormer House Speaker Nancy Pelosi criticized President Biden’s handling of a GOP-led resolution that would overturn parts of a District of Columbia crime bill, decrying that he shoul… [+2739 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Collider.com"
    },
    "author": "Ryan O'Rourke",
    "title": "New 'Alien' Movie Starts Filming Next Week in Budapest - Collider",
    "description": "Fede Álvarez's new Alien movie has filled out its cast alongside the previously-set star Cailee Spaeny and starts filming next week.",
    "url": "https://collider.com/new-alien-movie-cast/",
    "urlToImage": "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/10/alien-1.jpg",
    "publishedAt": "2023-03-03T23:19:00Z",
    "content": "Filming has officially begun on Fede Álvarez's Alien project and the Evil Dead remake maestro has landed the rest of his would-be victims for the Xenomorphs to tear into. Previously, Cailee Spaeny wa… [+3076 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investopedia"
    },
    "author": "Lyle Niedens",
    "title": "Research Firm Sees Retail Investors Bailing on Tesla's Stock - Investopedia",
    "description": "Vanda Research, which tracks investment flows from retail investors, says Tesla's first-ever investor day may trigger a shift in their positive sentiment toward the company's stock.",
    "url": "https://www.investopedia.com/tesla-shares-outlook-7187549",
    "urlToImage": "https://www.investopedia.com/thmb/of7GxD0Ti6G9uQMouqRKb30lGbo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-490597708-797a5797a32944889a638d9fab821e9a.jpg",
    "publishedAt": "2023-03-03T23:05:01Z",
    "content": "Shares of electric vehicle pioneer Tesla (TSLA) rose 5% Friday, a day after investors expressed their disappointment with the company's first-ever investor day for analysts.\r\nBut one investment resea… [+2467 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Devin Coldewey",
    "title": "Amazon pauses HQ2 construction after nationwide battle royale over location - TechCrunch",
    "description": "After turning the US into Thunderdome over who would offer the biggest tax breaks for its new HQ, Amazon is pausing construction in Arlington.",
    "url": "https://techcrunch.com/2023/03/03/amazon-pauses-hq2-construction-after-nationwide-battle-royale-over-location/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/amazon-hq2.jpg?resize=1200,770",
    "publishedAt": "2023-03-03T23:03:03Z",
    "content": "Remember when Amazon turned the United States into Thunderdome, making every state battle over the right to host the company’s next big headquarters and 25,000 jobs? Well, after laying off more than … [+2398 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Joe Morgan",
    "title": "C.J. Stroud doesn’t want Bears to draft him, backs Justin Fields: ‘That’s his team’ - Fox News",
    "description": "Former Ohio State quarterback C.J. Stroud backed Justin Fields as the quarterback in Chicago, saying he does not want the Bears to draft him with the No. 1 pick.",
    "url": "https://www.foxnews.com/sports/c-j-stroud-doesnt-want-bears-draft-him-backs-justin-fields-thats-his-team",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/GettyImages-1471016329-copy.jpg",
    "publishedAt": "2023-03-03T22:21:00Z",
    "content": "The Chicago Bears have the No. 1 pick in the 2023 NFL Draft\r\n and a number of options at their disposal. \r\nAfter drafting quarterback Justin Fields\r\n in the first round of the 2021 draft, Chicago cou… [+2142 chars]"
    }
    ]

  constructor(){
    super();
    console.log("hii")
    this.state = {
      articles : this.articles,
      loading : false
    }
  }
  render() {
    return (
      <div>

        <div className="container my-4">
        <h1>News</h1>

        <div className="row m-4">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imgURL={element.urlToImage} newsURL={element.url}/>
            </div>
          })}
        </div>


        </div>
      </div>
    )
  }
}

export default News
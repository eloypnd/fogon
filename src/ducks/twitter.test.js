import reducer from '.'
import { RECEIVE_TWEETS } from './twitter'

describe('twitter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      'twitter': {isLoading: false, data: []}
    })
  })

  it('should handle RECEIVE_TWEETS', () => {
    const FIXTURE = [
      {
        created_at: 'Sat May 05 11:05:46 +0000 2018',
        id: 992722015240024000,
        id_str: '992722015240024065',
        full_text: 'Have you ever seen a sun so bright? Welcome to our way of seeing the world! https://t.co/G3YR2mI0fA #Seville #VisitSeville #Travel https://t.co/PZt0iGYboC',
        truncated: false,
        display_text_range: [
          0,
          130
        ],
        entities: {
          hashtags: [
            {
              text: 'Seville',
              indices: [
                100,
                108
              ]
            },
            {
              text: 'VisitSeville',
              indices: [
                109,
                122
              ]
            },
            {
              text: 'Travel',
              indices: [
                123,
                130
              ]
            }
          ],
          symbols: [],
          user_mentions: [],
          urls: [
            {
              url: 'https://t.co/G3YR2mI0fA',
              expanded_url: 'http://www.visitasevilla.es/en/history/radiant-lifestyle',
              display_url: 'visitasevilla.es/en/history/rad…',
              indices: [
                76,
                99
              ]
            }
          ],
          media: [
            {
              id: 992718904593125400,
              id_str: '992718904593125376',
              indices: [
                131,
                154
              ],
              media_url: 'http://pbs.twimg.com/media/DcbYlYYWkAA0xhd.jpg',
              media_url_https: 'https://pbs.twimg.com/media/DcbYlYYWkAA0xhd.jpg',
              url: 'https://t.co/PZt0iGYboC',
              display_url: 'pic.twitter.com/PZt0iGYboC',
              expanded_url: 'https://twitter.com/sevillaciudad/status/992722015240024065/photo/1',
              type: 'photo',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 680,
                  h: 453,
                  resize: 'fit'
                },
                large: {
                  w: 1200,
                  h: 800,
                  resize: 'fit'
                },
                medium: {
                  w: 1200,
                  h: 800,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        extended_entities: {
          media: [
            {
              id: 992718904593125400,
              id_str: '992718904593125376',
              indices: [
                131,
                154
              ],
              media_url: 'http://pbs.twimg.com/media/DcbYlYYWkAA0xhd.jpg',
              media_url_https: 'https://pbs.twimg.com/media/DcbYlYYWkAA0xhd.jpg',
              url: 'https://t.co/PZt0iGYboC',
              display_url: 'pic.twitter.com/PZt0iGYboC',
              expanded_url: 'https://twitter.com/sevillaciudad/status/992722015240024065/photo/1',
              type: 'photo',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 680,
                  h: 453,
                  resize: 'fit'
                },
                large: {
                  w: 1200,
                  h: 800,
                  resize: 'fit'
                },
                medium: {
                  w: 1200,
                  h: 800,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 22466586,
          id_str: '22466586',
          name: 'Sevilla',
          screen_name: 'sevillaciudad',
          location: 'Sevilla,  Andalucía',
          description: 'Cuenta OFICIAL gestionada por #Turismo de #Sevilla. ¡Bienvenido a Sevilla!  OFFICIAL account managed by #Seville Tourist Board.',
          url: 'http://t.co/AaLZe3au8Z',
          entities: {
            url: {
              urls: [
                {
                  url: 'http://t.co/AaLZe3au8Z',
                  expanded_url: 'http://www.visitasevilla.es',
                  display_url: 'visitasevilla.es',
                  indices: [
                    0,
                    22
                  ]
                }
              ]
            },
            description: {
              urls: []
            }
          },
          'protected': false,
          followers_count: 115194,
          friends_count: 9803,
          listed_count: 1175,
          created_at: 'Mon Mar 02 08:39:47 +0000 2009',
          favourites_count: 2948,
          utc_offset: 7200,
          time_zone: 'Madrid',
          geo_enabled: true,
          verified: false,
          statuses_count: 14697,
          lang: 'es',
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: 'F3F1F1',
          profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/602737948623122432/8_aR0bBR.png',
          profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/602737948623122432/8_aR0bBR.png',
          profile_background_tile: false,
          profile_image_url: 'http://pbs.twimg.com/profile_images/661833087354040320/bCqcDDYw_normal.png',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/661833087354040320/bCqcDDYw_normal.png',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/22466586/1515401555',
          profile_link_color: 'C4001F',
          profile_sidebar_border_color: 'FFFFFF',
          profile_sidebar_fill_color: 'FFFFFF',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: false,
          default_profile: false,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none'
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 3,
        favorite_count: 15,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'en'
      }
    ]

    const FIXTURE_RESULT = [
      {
        "created_at": "Sat May 05 11:05:46 +0000 2018",
        "favorite_count": 15,
        "id": "992722015240024065",
        "media": [
          {
            "display_url": "pic.twitter.com/PZt0iGYboC",
            "expanded_url": "https://twitter.com/sevillaciudad/status/992722015240024065/photo/1",
            "id": 992718904593125400,
            "id_str": "992718904593125376",
            "indices": [
              131, 154
            ],
            "media_url": "http://pbs.twimg.com/media/DcbYlYYWkAA0xhd.jpg",
            "media_url_https": "https://pbs.twimg.com/media/DcbYlYYWkAA0xhd.jpg",
            "sizes": {
              "large": {
                "h": 800,
                "resize": "fit",
                "w": 1200
              },
              "medium": {
                "h": 800,
                "resize": "fit",
                "w": 1200
              },
              "small": {
                "h": 453,
                "resize": "fit",
                "w": 680
              },
              "thumb": {
                "h": 150,
                "resize": "crop",
                "w": 150
              }
            },
            "type": "photo",
            "url": "https://t.co/PZt0iGYboC"
          }
        ],
        "message": "Have you ever seen a sun so bright? Welcome to our way of seeing the world! <a href=\"http://www.visitasevilla.es/en/history/radiant-lifestyle\" target=\"_blank\">visitasevilla.es/en/history/rad…</a> <a href=\"https://twitter.com/hashtag/Seville\" target=\"_blank\">#Seville</a> <a href=\"https://twitter.com/hashtag/VisitSeville\" target=\"_blank\">#VisitSeville</a> <a href=\"https://twitter.com/hashtag/Travel\" target=\"_blank\">#Travel</a> ",
        "retweet_count": 3,
        "source": "twitter",
        "source_url": "http://twitter.com/sevillaciudad/status/992722015240024065",
        "user": {
          "contributors_enabled": false,
          "created_at": "Mon Mar 02 08:39:47 +0000 2009",
          "default_profile": false,
          "default_profile_image": false,
          "description": "Cuenta OFICIAL gestionada por #Turismo de #Sevilla. ¡Bienvenido a Sevilla!  OFFICIAL account managed by #Seville Tourist Board.",
          "entities": {
            "description": {
              "urls": []
            },
            "url": {
              "urls": [
                {
                  "display_url": "visitasevilla.es",
                  "expanded_url": "http://www.visitasevilla.es",
                  "indices": [
                    0, 22
                  ],
                  "url": "http://t.co/AaLZe3au8Z"
                }
              ]
            }
          },
          "favourites_count": 2948,
          "follow_request_sent": null,
          "followers_count": 115194,
          "following": null,
          "friends_count": 9803,
          "geo_enabled": true,
          "has_extended_profile": false,
          "id": 22466586,
          "id_str": "22466586",
          "is_translation_enabled": false,
          "is_translator": false,
          "lang": "es",
          "listed_count": 1175,
          "location": "Sevilla,  Andalucía",
          "name": "Sevilla",
          "notifications": null,
          "profile_background_color": "F3F1F1",
          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/602737948623122432/8_aR0bBR.png",
          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/602737948623122432/8_aR0bBR.png",
          "profile_background_tile": false,
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/22466586/1515401555",
          "profile_image_url": "http://pbs.twimg.com/profile_images/661833087354040320/bCqcDDYw_normal.png",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/661833087354040320/bCqcDDYw_normal.png",
          "profile_link_color": "C4001F",
          "profile_sidebar_border_color": "FFFFFF",
          "profile_sidebar_fill_color": "FFFFFF",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "protected": false,
          "screen_name": "sevillaciudad",
          "statuses_count": 14697,
          "time_zone": "Madrid",
          "translator_type": "none",
          "url": "http://t.co/AaLZe3au8Z",
          "utc_offset": 7200,
          "verified": false
        }
      }
    ]

    expect(
      reducer(undefined, {
        type: RECEIVE_TWEETS,
        payload: FIXTURE
      })
    ).toEqual({
      'twitter': {isLoading: false, data: FIXTURE_RESULT}
    })
  })

  // TODO: write tests for the rest of reducers
})

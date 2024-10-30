=== Online Buchungssystem - edoobox ===
Contributors: edoobox
Donate link:
Tags: Online Booking System, Seminar Registration, Course Administration, Event Registration System, Booking Software
Requires at least: 5.0
Requires PHP: 7.4
Tested up to: 6.5.4
Stable tag: 3.0.23
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0

== Description ==

The Edoobox booking system simplifies the planning and advertising of courses and events with the online booking solutions.

= Online Booking System =
edoobox is the clever online booking system. Customers can book and pay for courses, seminars and events around the clock in real time.

= Promotion-Campaigns =
With edoobox you choose a well-rounded online booking system. Efficient management of your courses, seminars, events, congresses and symposia. Increase your success.

= Integration into your website =
Integrate the booking system into your website and adapt the design to your web presence. All offer pages are optimised for smartphones, tablets and PC.

= Participant management =
Your participants are your most valuable asset. All customer details and offers can easily be viewed and changed anywhere at any time.

= Payment systems =
Your participants pay online by credit card or bank transfer, edoobox itself does not charge a discount. From the many payment systems provided you can activate the desired system and/or activate the automatic invoice generation.

= Real-time price control =
The online presence/attendee list is always available in real time. For optimal communication, the provider is informed by e-mail in case of changes.

== Installation ==

* You need an edoobox account to post offers on your website.
  Edoobox offers different subscription options.
  More information under: https://www.edoobox.com/preise-und-leistungen/

1. upload the plugin files to the directory 'wp-content/plugins/booking-system-edoobox' or install the plugin directly from the WordPress plugin screen
2. activate the plugin via the 'Plugins\' screen in your WordPress system.
3. go to the edoobox booking system settings page in your WordPress installation and complete the settings
4. navigate to the post in which you want to add your offers
5. click on the calendar icon to generate and insert the shortcode for Wordpress

== Frequently Asked Questions ==

= How can I test edoobox? =
Open a free 10 day edoobox account at [https://app2.edoobox.com/login/signup](https://app2.edoobox.com/login/signup)

= What is the function of edoobox? =
All functions can be found at [https://www.edoobox.com/online-buchungssystem/](https://www.edoobox.com/online-buchungssystem/)

= Is there an online documentation about edoobox? =
Yes, it can be reached under the following URL [https://docs.edoobox.com/](https://docs.edoobox.com/)

= What are the costs/prices of edoobox? =
Edoobox offers different subscription or pay as you go options.
More information under:
[https://www.edoobox.com/preise-und-leistungen/](https://www.edoobox.com/preise-und-leistungen/)

= Why is my edoobox design not adopted? =
You have to select the setting for bootstrap in the Wordpress plugin backend.
The first loading of a page with a new design can take a few seconds. After that the page should load with the normal speed.

= Which Wordpress version does the edoobox plugin require? =
For the Wordpress plugin to work properly we recommend to work with the latest Wordpress version.

= Are "out-of-date courses" displayed or with outdated content? =
The most likely cause for this problem is that you are using a caching plugin (WP Cache / WP Rocket) which stores the dynamic page contents. So the Wordpress plugin cannot update/display the necessary content on the page. To do this, clear the cache of the page so that the current content is displayed.

= Courses on the homepage are displayed but cannot be clicked? =
For the Wordpress plugin of edoobox to work on the start page the root attribute must be set in the shortcode. See the following shortcode as an example:
[edbs_panel url="<your-account-shortcut>" root="https://example.com/a-page-with-a-shortcode" ... ]
With the root attribute in the shortcode a path is set on which the sub pages of edoobox are opened.
This feature can be used on any page, but is required on the home page, blog pages and possibly on other pages that are not part of the Wordpress standard.

= Shortcode does not work! =
Most likely you have made a typing error. Note that the short code is edbs_panel. Shortcodes must always have a space before the closing bracket. [edbs_panel ]

Tip: Create the shortcodes via the edoobox backend under Preview/Share.

You can check in the Wordpress Plugin Backend under Page Indexing if the page is listed. If the page is not listed, try to start the manual search by clicking on the button.
If the page is still not displayed, the page type is probably not supported.

= How do I use the shortcodes in different languages? =
In the shortcode the language attribute can be easily extended. Following example:
[edbs_panel language="en" ... ]
As you can see, only the "language" attribute must be filled in with the corresponding language abbreviation.

= I received an error code. What does it mean? =
You will find a list of the error codes in the following documentation:
[https://api.docs.edoobox.com/](https://api.docs.edoobox.com/)


== Screenshots ==

1. overview page of the offers
2. detail page of an offer
3. registration process for an offer
4. edoobox plugin settings page
5. shortcode generator

== Changelog ==

= Version 3.0.23 - 2024-06-18 =
* Feature: Performance improvements.

= Version 3.0.22 - 2024-06-18 =
* Hotfix: Allow for multiple shortcodes on single page.

= Version 3.0.21 - 2024-06-18 =
* Hotfix: Add fallback for when required attributes are not set.

= Version 3.0.20 - 2024-06-17 =
* Feature: Speed has been greatly optimized through shortcode indexing.
* Feature: Additional information page added for better support.

= Version 3.0.19 - 2024-06-13 =
* Hotfix: Cache problems have been resolved.
* Feature: Speed has been greatly optimized.

= Version 3.0.18 - 2024-05-07 =
* Hotfix: Troubleshooting with Bootstrap Style.
* Feature: Update banner images.

= Version 3.0.13 - 2024-04-30 =
* Feature: Add version tag to DOM as hidden element.

= Version 3.0.12 - 2024-04-30 =
* Refactor: Minor improvements.

= Version 3.0.11 - 2024-04-30 =
* Refactor: Minor improvements.
* Refactor: Improve fallback handling for missing environments.

= Version 3.0.10 - 2024-04-30 =
* Hotfix: Add more fallbacks for missing environments.
* Feature: Remove duplicate error strings from failed api requests.

= Version 3.0.9 - 2024-04-30 =
* Feature: Increase request timeouts.

= Version 3.0.8 - 2024-04-29 =
* Feature: Increase request timeouts.
* Chore: Add support for Wordpress 6.5.2.

= Version 3.0.7 - 2024-04-29 =
* Hotfix: Resolve issue where all offers where shown in categories.

= Version 3.0.6 - 2024-04-25 =
* Hotfix: Resolve issue where in edge cases the environment fallback was not added to host.

= Version 3.0.5 - 2023-10-23 =
* Feature: Add support for the new V2 edoobox API.
* Feature: Add support for the new edoobox design.
* Chore: Performance optimisations.
* Chore: Add support for Wordpress 6.5.0

= Version 2.4.1 - 2023-09-25 =
* Bugfix: Resolve issue with app2 environment.

= Version 2.4.0 - 2023-04-01 =
* Feature: Add support for the lession overview widget.

= Version 2.3.7 - 2023-07-11 =
* Chore: Scripts and styles are only loaded for frontend, if a shortcut is found on current page.

= Version 2.3.6 - 2023-06-02 =
* Bugfix: Add default value for environment in case no explicit value set.
* Chore: Test with Wordpress 6.2.2

= Version 2.3.5 - 2023-06-01 =
* Feature: Add option to choose between edoobox environments.

= Version 2.3.4 - 2023-04-11 =
* Chore: Update Google Tag Manager Events.

= Version 2.3.3 - 2023-03-20 =
* Hotfix: Resolve issues where error was displayed on screen.

= Version 2.3.2 - 2023-03-01 =
* Bugfix: Resolve issues concerning the calendar widget and the edstart attribute.

= Version 2.3.1 - 2023-01-30 =
* Chore: Add compatibility for Draw Attention plugin.
* Chore: Add fallback for root-Attributes without trailing slash.
* Feature: Add debug mode.
* Feature: Add more settings to calendar widget.

= Version 2.3.0 - 2023-01-23 =
* Chore: Rewrite frontend code to Typescript.
* Chore: Minor updates to widgets.
* Bugfix: Resolve issues concerning the calendar widget.

= Version 2.2.5 - 2022-12-01 =
* Chore: bump versions.
* Chore: correct spelling mistakes.

= Version 2.2.4 - 2022-11-30 =
* Chore: test plugin with WordPress 6.1.1.
* Bugfix: resolve style issues in calendar widget.

= Version 2.2.3 - 2022-09-07 =
* Chore: test plugin with WordPress 6.0.2.

= Version 2.2.2 - 2022-05-09 =
* Chore: purge unused scripts.

= Version 2.2.1 - 2022-05-04 =
* Bugfix: minor bug fixes.

= Version 2.2.0 - 2022-04-28 =
* Bugfix: minor bug fixes.
* Chore: Namespace bootstrap

= Version 2.1.7 - 2022-02-09 =
* Bugfix: minor bug fixes.

= Version 2.1.6 - 2022-02-08 =
* Bugfix: minor bug fixes.

= Version 2.1.5 - 2022-02-08 =
* Bugfix: Prevent loading iframe more than once in specific browsers.

= Version 2.1.4 - 2022-01-31 =
* Bugfix: Issues with Bootstrap Accordion resolved.
* Bugfix: Resolve issue, where jQuery could not load and would cause Register button to open in a new tab.
* Bugfix: Minor fixes.
* Chore: Fetch data from new endpoint (API V1).
* Chore: Tested for new WordPress Version 5.9.


= Version 2.1.2 - 2021-07-02 =
* Bugfix: Add script to enable responsive tables

= Version 2.1.1 - 2021-06-28 =
* Feature: Cache busting for JS and CSS files

= Version 2.1.0 =
* Feature: Add own Google Maps API Key
* Bugfix: Eliminate conflicts between other plugins
* Bugfix: Resolve conflicting jQuery issues

= Version 2.0.1 =
* Tested on Wordpress 5.7.2
* Requires PHP 7.4

= Version 2.0.0 =
* Tested on Wordpress 5.7.1
* Requires PHP 7.4
* Feature: Remove design cache
* Chore: Upgrade jQuery
* Refactor: Object oriented approach with service classes
* Refactor: Composer PSR-4
* Refactor: Load CSS styles from CDN instead of writing them to file system
* Bugfix: Remove collision between Elementor customizer and edoobox
* Bugfix: Replace aggressive CSS classes with scoped classes
* Bugfix: Guarantee that jQuery is loaded

= Version 1.7.5 =
* Tested on Wordpress 5.7.0
* Feature: Responsive table for mobile
* Feature: New description in Shortcode Pro
* Bugfix: Prevent loading jQuery multiple times
* Bugfix: Display correct time in Shortcode Pro (Next)

= 0.8 =
* Feature: Micro Templating Engine to adjust templates of /v1/offers
* Feature: Micro Templating Engine: save custom templates in DB (update proof)
* Feature: Offers shortcode -> [edbs_panel type="next" ]
* Feature: Custom Shortcode Template (only with "next") -> [edbs_panel type="next" template="templateName" ]
* Feature: Check if API key/secret works. Has visual feedback in backend. ( green= success, red= failed ) (AJAX)
* Bugfix: UrlRewrite now case-insensitive for account name/"kürzel"
* Bugfix: API Errors get catched correctly, don't result in a broken page anymore and print useful info to the error
= 0.7 =
* Feature: Multi Shortcodes (Beta+)
* Feature: Custom edoobox CSS
* Feature: Google Tag Manager Integrated
* Feature: iFrame Scroll
* Feature: Shortcode Backend View (with list of individual shortcodes)
* Bugfix: Default Design: Searchbar (is now fixed to top)
* Bugfix: Version 1.4 did not cache the API Results due to typo.
= 0.6 =
* Bugfix "404 Error" fixed with new structure
* Bugfix incorrect font URLs in the Bootstrap CSS file
* Feature: Shortcode Check
* Extension backend: list of shortcode pages
* Optimisation of the code structure
* Performance optimisation: code is only executed on shortcode pages
* Extension of the translations
* Info: Warning if more than one shortcode per page is used
= 0.5 =
* Bugfix
= 0.4 =
* Inserting the root attribute for the installation of the plugin on the start page
= 0.3 =
* Bugfix
= 0.2 =
* Bugfix
= 0.1 =
* Update for Short Code Generator
= 0.0 =
* Update to new version of WP
= 0.0 =
* First official release.
* Update translations

== Upgrade Notice ==

= 2.0.0 =
Requires PHP 7.3

= 0.8 =
Fixes an issue where the edoobox (API) data does not get cached. API errors won't crash your page anymore. Introducing the new shortcode "next": There is a new templating engine that is great to use and style your pages with edoobox offers.

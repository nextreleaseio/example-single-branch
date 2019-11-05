# Single Branch Environment Example #
## Overview ##
Making all pull requests against a single “master” branch is 
an excellent strategy to quickly get up and running while 
reducing the cognitive overhead for developers and managers. 
This ease of use makes a single branch release strategy popular 
among open source developers and projects who have simple deployment 
needs. 

This release strategy centers around a single master branch 
where all of the edits from the contributors is staged. Forks, 
branches, and direct commits all funnel into this primary branch 
and then the maintainers determine when to cut a new release and 
push it out to their end-users. 

Automate Your Release Notes in 3-Clicks @ [NextRelease.io](https://www.nextrelease.io)


# Output Example #
> ## Release 0.11.0
> #### Enhancements 
> - Enhanced Dashboard Filtering [#156](https://github.com/nextreleaseio/frontend/pull/156) ( [donaldwasserman](https://github.com/donaldwasserman) )
> 
> #### Bugfixes 
> - Resolved billing [#155](https://github.com/nextreleaseio/frontend/pull/155) ( [donaldwasserman](https://github.com/donaldwasserman) )
> - Responsive Styling Fixes [#154](https://github.com/nextreleaseio/frontend/pull/154) ( [donaldwasserman](https://github.com/donaldwasserman) )
> - Changed filtering to modified date [#152](https://github.com/nextreleaseio/frontend/pull/152) ( [donaldwasserman](https://github.com/donaldwasserman) )

# Other Examples
* [Automatic Git Tagging & GitHub Release Creation](https://github.com/nextreleaseio/example-single-branch/releases)

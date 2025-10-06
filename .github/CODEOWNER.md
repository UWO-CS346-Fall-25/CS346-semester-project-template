# CODEOWNERS
# Docs: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners

# Default: require a review from instructors for all changes in core code.
*                                   @UWO-CS346-Fall-25/instructors

# Delegate optional ownership for specific directories if you use TAs:
src/routes/*                        @UWO-CS346-Fall-25/TAs
src/controllers/*                   @UWO-CS346-Fall-25/TAs
src/models/*                        @UWO-CS346-Fall-25/TAs

# Security-sensitive areas — instructors only
src/middleware/*                    @UWO-CS346-Fall-25/instructors
db/migrations/*                     @UWO-CS346-Fall-25/instructors
db/scripts/*                        @UWO-CS346-Fall-25/instructors

# Docs can be reviewed by either TAs or instructors
docs/*                              @UWO-CS346-Fall-25/TAs @UWO-CS346-Fall-25/instructors
.github/*                           @UWO-CS346-Fall-25/instructors

# Example of assigning ownership to a student group (optional)
# src/views/entities/*              @UWO-CS346-Fall-25/team-3

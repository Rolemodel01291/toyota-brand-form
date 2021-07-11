# CI runs on 'release/*' branches, so we need the basename of the branch in lower case
export GIT_BRANCH=$(basename ${BITBUCKET_BRANCH})
export ENV_NAME=$(echo ${GIT_BRANCH} | tr '[:upper:]' '[:lower:]')

# AWS Keys
## the eval bash function is used to dereference and load the correct value for the branch that CI is running under
export AWS_ACCESS_KEY_ID=$(eval "echo \$${GIT_BRANCH}_AWS_ACCESS_KEY_ID")
export AWS_SECRET_ACCESS_KEY=$(eval "echo \$${GIT_BRANCH}_AWS_SECRET_ACCESS_KEY")

# AWS information
export AWS_DEFAULT_REGION='ap-southeast-2'
## the eval bash function is used to dereference and load the correct value for the branch that CI is running under
export AWS_ACCOUNT_ID=$(eval "echo \$${GIT_BRANCH}_AWS_ACCOUNT_ID")

# Assets information
export LOCAL_PATH='build'

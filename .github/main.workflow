workflow "Build and Publish" {
  on = "push"
  resolves = ["release", "action \"Run Jest\" {   uses = \"stefanoeb/jest-action@1.0.0\" }"]
}

action "deplpy" {
  uses = "actions/zeit-now@5c51b26db987d15a0133e4c760924896b4f1512f"
  secrets = ["ZEIT_TOKEN"]
  args = "--no-clipboard deploy > $HOME/$GITHUB_ACTION.txt"
}

action "alias" {
  uses = "actions/zeit-now@5c51b26db987d15a0133e4c760924896b4f1512f"
  needs = ["deplpy"]
  secrets = ["ZEIT_TOKEN"]
  args = "alias `cat /github/home/deploy.txt` $GITHUB_SHA"
}

action "master-branch-filter" {
  uses = "actions/bin/filter@0dbb077f64d0ec1068a644d25c71b1db66148a24"
  needs = ["alias"]
  args = "branch master"
}

action "release" {
  uses = "actions/zeit-now@5c51b26db987d15a0133e4c760924896b4f1512f"
  needs = ["master-branch-filter"]
  args = "now --target production"
  secrets = ["ZEIT_TOKEN"]
}

action "action \"Run Jest\" {   uses = \"stefanoeb/jest-action@1.0.0\" }" {
  uses = "stefanoeb/jest-action"
  needs = ["master-branch-filter"]
}

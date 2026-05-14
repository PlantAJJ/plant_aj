#!/usr/bin/env bash
# Sets the local git hooks directory to .githooks for this project.

set -e


HOOKS_DIR=".githooks"


# ── configure git to use it ────────────────────────────────────────────────────
git config core.hooksPath "$HOOKS_DIR"
echo "✔ Git hooks path set to '$HOOKS_DIR' for this project."
echo "  Place your hooks in $(pwd)/$HOOKS_DIR and make them executable (chmod +x)."

MADE_EXECUTABLE=0
while IFS= read -r -d '' file; do
  chmod +x "$file"
  echo "  chmod +x $file"
  MADE_EXECUTABLE=1
done < <(find "$HOOKS_DIR" -type f -print0)
 
if [ "$MADE_EXECUTABLE" -eq 0 ]; then
  echo "  (no hook files found in $HOOKS_DIR yet — they will be executable once added)"
fi
 
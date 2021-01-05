/**
 * @fileoverview Rule to detect headers without current year strings.
 * @author Felipe Bruce
 */
'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: {
    'detect-headers-without-current-year': {

      create(context) {
        /**
         * Aux function to SequenceExpression.
         * @param {ASTNode, string} The node to check.
         * @returns {void}
         * @private
         */
        function processComment(comment, currentYear) {
          if (
            comment.value.includes("Samsung Electronics Co.") &&
            comment.value.match("[0-9]{4}") &&
            comment.value.match("[0-9]{4}")[0] !== currentYear
          ) {
            context.report({
              node: null,
              loc: comment.loc,
              message: "Wrong year founded in this header!",
              fix(fixer) {
                return fixer.replaceTextRange(
                  [21, 25],
                  "2021"
                );
              },
            });
          }
        }

        return {
          Program() {
            const currentYear = new Date().getFullYear().toString();
            const comments = context.getAllComments();
            comments
              .filter((token) => token.type !== "Shebang")
              .forEach((comment) => {
                processComment(comment, currentYear);
              });
          },
        };
      },
    },
  },
};

"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[8334],{7129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"pmc_members/nominate-committer","title":"Nominate Committer","description":"This document mainly introduces how a PMC member nominates a new committer.","source":"@site/community/pmc_members/nominate-committer.md","sourceDirName":"pmc_members","slug":"/pmc_members/nominate-committer","permalink":"/community/pmc_members/nominate-committer","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/opendal/tree/main/website/community/pmc_members/nominate-committer.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Nominate Committer","sidebar_position":2},"sidebar":"docs","previous":{"title":"Onboarding","permalink":"/community/pmc_members/onboarding"},"next":{"title":"Nominate PMC Member","permalink":"/community/pmc_members/nominate-pmc-member"}}');var i=t(6070),o=t(5658);const r={title:"Nominate Committer",sidebar_position:2},s=void 0,d={},c=[{value:"Start vote about the candidate",id:"start-vote-about-the-candidate",level:2},{value:"Send invitation to the candidate",id:"send-invitation-to-the-candidate",level:2},{value:"Add the candidate to the committer list",id:"add-the-candidate-to-the-committer-list",level:2},{value:"Announcement",id:"announcement",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This document mainly introduces how a PMC member nominates a new committer."}),"\n",(0,i.jsx)(n.h2,{id:"start-vote-about-the-candidate",children:"Start vote about the candidate"}),"\n",(0,i.jsxs)(n.p,{children:["Start a vote about the candidate via sending email to: ",(0,i.jsx)(n.a,{href:"mailto:private@opendal.apache.org",children:"private@opendal.apache.org"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"candidate_name: The full name of the candidate."}),"\n",(0,i.jsx)(n.li,{children:"candidate_github_id: The GitHub id of the candidate."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Title:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[VOTE] Add candidate ${candidate_name} as a new committer\n"})}),"\n",(0,i.jsx)(n.p,{children:"Content:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hi, All OpenDAL PMC members.\n  \nI'd like to take this chance to call the vote for inviting committed\ncontributor ${candidate_name} (GitHub id: ${candidate_github_id}) as a new committer of Apache \nOpenDAL.\n\n${candidate_contributions}\n\n${candidate_name}'s great contributions could be found:\n\n- GitHub Account: https://github.com/${candidate_github_id}\n- GitHub Pull Requests: https://github.com/apache/opendal/pulls?q=is%3Apr+author%3A${candidate_github_id}+is%3Aclosed\n- GitHub Issues: https://github.com/apache/opendal/issues?q=is%3Aopen+mentions%3A${candidate_github_id}\n\nPlease make your valuable evaluation on whether we could invite ${candidate_name} as a\ncommitter:\n\n[ +1 ] Agree to add ${candidate_name} as a committer of OpenDAL.\n[  0 ] Have no sense.\n[ -1 ] Disagree to add ${candidate_name} as a committer of OpenDAL, because .....\n\nThis vote starts from the moment of sending and will be open for 3 days.\n \nThanks and best regards,\n\n${your_name}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.a,{href:"https://lists.apache.org/thread/j16lvkyrmvg8wyf3z4gqpjky5m594jhy",children:"https://lists.apache.org/thread/j16lvkyrmvg8wyf3z4gqpjky5m594jhy"})," (Private Link)"]}),"\n",(0,i.jsxs)(n.p,{children:["After at least 3 ",(0,i.jsx)(n.code,{children:"+1"})," binding vote and no veto, claim the vote result:"]}),"\n",(0,i.jsx)(n.p,{children:"Title:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[RESULT][VOTE] Add candidate ${candidate_name} as a new committer\n"})}),"\n",(0,i.jsx)(n.p,{children:"Content:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hi, all:\n\nThe vote for \"Add candidate ${candidate_name} as a new committer\" has PASSED and closed now.\n\nThe result is as follows:\n\n4 binding +1 Votes:\n- voter names\n\nVote thread: https://lists.apache.org/thread/j16lvkyrmvg8wyf3z4gqpjky5m594jhy\n\nThen I'm going to invite ${candidate_name} to join us.\n\nThanks for everyone's support!\n\n${your_name}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"send-invitation-to-the-candidate",children:"Send invitation to the candidate"}),"\n",(0,i.jsxs)(n.p,{children:["Send an invitation to the candidate and cc ",(0,i.jsx)(n.a,{href:"mailto:private@opendal.apache.org",children:"private@opendal.apache.org"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"Title:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Invitation to become OpenDAL Committer: ${candidate_name}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Content:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hello ${candidate_name},\n\nThe OpenDAL PMC hereby offers you committer privileges\nto the project. These privileges are offered on the\nunderstanding that you'll use them reasonably and with\ncommon sense. We like to work on trust rather than\nunnecessary constraints. \n\nBeing a committer enables you to more easily make \nchanges without needing to go through the patch \nsubmission process.\n\nBeing a committer does not require you to \nparticipate any more than you already do. It does \ntend to make one even more committed. You will \nprobably find that you spend more time here.\n\nOf course, you can decline and instead remain as a \ncontributor, participating as you do now.\n\nA. This personal invitation is a chance for you to \naccept or decline in private.  Either way, please \nlet us know in reply to the [private@opendal.apache.org] \naddress only.\n\nB. If you accept, the next step is to register an iCLA:\n    1. Details of the iCLA and the forms are found \n    through this link: https://www.apache.org/licenses/#clas\n\n    2. Instructions for its completion and return to \n    the Secretary of the ASF are found at\n    https://www.apache.org/licenses/#submitting\n\n    3. When you transmit the completed iCLA, request \n    to notify the Apache OpenDAL and choose a \n    unique Apache ID. Look to see if your preferred \n    ID is already taken at \n    https://people.apache.org/committer-index.html\n    This will allow the Secretary to notify the PMC \n    when your iCLA has been recorded.\n\nWhen recording of your iCLA is noted, you will \nreceive a follow-up message with the next steps for \nestablishing you as a committer.\n\nWith the expectation of your acceptance, welcome!\n\n${your_name} (as represents of The Apache OpenDAL PMC)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"add-the-candidate-to-the-committer-list",children:"Add the candidate to the committer list"}),"\n",(0,i.jsxs)(n.p,{children:["After the candidate accepts the invitation and the iCLA is recorded, add the candidate to the committer list by ",(0,i.jsx)(n.a,{href:"https://whimsy.apache.org/roster/committee/opendal",children:"whimsy roster tools"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(2509).A+"",width:"1598",height:"494"})}),"\n",(0,i.jsx)(n.h2,{id:"announcement",children:"Announcement"}),"\n",(0,i.jsxs)(n.p,{children:["Once the nominee accepts the invitation and the commit bit is granted, it's encouraged to send an announcement email to ",(0,i.jsx)(n.a,{href:"mailto:dev@opendal.apache.org",children:"dev@opendal.apache.org"})," to welcome the new committers. Here is an email template:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Hello, everyone\n\nOn behalf of the Apache OpenDAL PMC, I'm happy to announce that\n${candidate_name} has accepted the invitation to become a committer of\nApache OpenDAL.\n\nWelcome, and thank you for your contributions!\n\n${your name}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},2509:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/roster-add-committer-a544b022d22a3bfffef5accc9d825942.png"},5658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(758);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
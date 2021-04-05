customElements.define(
  "zombie-profile",
  class extends HTMLElement {
    constructor() {
      super();
      let profile = document.getElementById("zprofiletemplate");
      let myprofile = profile.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        myprofile.cloneNode(true)
      );

      let msgbtn = this.shadowRoot.querySelector(".messagebtn"),
        profileEl = this.shadowRoot.querySelector(".profile-wrapper");

      let zname = this.getElementsByTagName("span")[0].innerHTML;
      msgbtn.addEventListener("click", function (e) {
        let formEl = document.createElement("form"),
          subjectEl = document.createElement("input"),
          subjectlabel = document.createElement("label"),
          contentEl = document.createElement("textarea"),
          contentlabel = document.createElement("label"),
          submitEl = document.createElement("input"),
          closebtn = document.createElement("button");

        formEl.setAttribute("method", "get");
        formEl.setAttribute(
          "action",
          "https://johnrhea.com/undead-form-practice.php"
        );
        formEl.classList.add("hello");

        closebtn.innerHTML = "x";
        closebtn.addEventListener("click", function () {
          formEl.remove();
        });

        subjectEl.setAttribute("type", "text");
        subjectEl.setAttribute("name", "subj");
        subjectlabel.setAttribute("for", "subj");
        subjectlabel.innerHTML = "Subject:";

        contentEl.setAttribute("name", "cntnt");
        contentEl.innerHTML = "Hi " + zname + ",\nI like your braaains...";
        contentlabel.setAttribute("for", "cntnt");
        contentlabel.innerHTML = "Message:";

        submitEl.setAttribute("type", "submit");
        submitEl.setAttribute("value", "Send Message");

        formEl.appendChild(closebtn);
        formEl.appendChild(subjectlabel);
        formEl.appendChild(subjectEl);
        formEl.appendChild(contentlabel);
        formEl.appendChild(contentEl);
        formEl.appendChild(submitEl);

        profileEl.appendChild(formEl);
      });
    }
  }
);

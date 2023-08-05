var reactions = [];
var clickedProfiles = [];

document.addEventListener("DOMContentLoaded", function () {
  reactions = [
    {
      name: "Mark Webber",
      message: "reacted to your recent post",
      postDate: "1m ago",
      boldText: "My first tournament today !",
      isMessage: false,
      imageSrc: "./assets/images/avatar-mark-webber.webp",
      textMessage: undefined,
      isChecked: false,
      isPhoto: false,
    },
    {
      name: "Angela Gray",
      message: "followed you",
      postDate: "5m ago",
      boldText: undefined,
      isMessage: false,
      imageSrc: "./assets/images/avatar-angela-gray.webp",
      textMessage: undefined,
      isChecked: false,
      isPhoto: false,
    },
    {
      name: "Jacob Thompson",
      message: "has joined your group",
      postDate: "1 day ago",
      boldText: "Chess Club",
      isMessage: false,
      imageSrc: "./assets/images/avatar-jacob-thompson.webp",
      textMessage: undefined,
      isChecked: false,
      isPhoto: false,
    },
    {
      name: "Rizky Hasanuddin",
      message: "sent you a private message",
      postDate: "5 day ago",
      boldText: undefined,
      imageSrc: "./assets/images/avatar-rizky-hasanuddin.webp",
      isMessage: true,
      isChecked: false,
      textMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      isPhoto: false,
    },
    {
      name: "Kimberly Smith",
      message: "commented on your picture",
      postDate: "1 week ago",
      boldText: undefined,
      isMessage: false,
      imageSrc: "./assets/images/avatar-kimberly-smith.webp",
      textMessage: undefined,
      isChecked: false,
      isPhoto: true,
      notifImg: "./assets/images/image-chess.webp",
    },
    {
      name: "Nathan Peterson",
      message: "reacted to your recent post",
      postDate: "2 weeks ago",
      boldText: "5 end-game strategies to increase your win rate",
      isMessage: false,
      imageSrc: "./assets/images/avatar-nathan-peterson.webp",
      textMessage: undefined,
      isChecked: false,
      isPhoto: false,
    },
    {
      name: "Anna Kim",
      message: "left the group",
      postDate: "2 weeks ago",
      boldText: "Chess Club",
      isMessage: false,
      imageSrc: "./assets/images/avatar-anna-kim.webp",
      textMessage: undefined,
      isChecked: false,
      isPhoto: false,
    },
  ];

  var countElement = document.getElementById("count-notification");
  console.log(countElement.textContent);
  countElement.textContent = reactions.length;

  var notificationDiv = document.getElementById("notification-content");
  reactions.forEach(function (reaction) {
    var notif_text_content = document.createElement("div");

    if (reaction.isMessage) {
      notif_text_content.className = "text-read-message";
      notif_text_content.addEventListener("click", function (event) {
        var clickedElement = event.target;
        var notifTextParent = findNotifTextParent(clickedElement);
        if (notifTextParent) {
          //   notifTextParent.style.backgroundColor = "white";
          let profile = markAsRead(notifTextParent);
          console.log("----", profile);
          let profileIndex = clickedProfiles.findIndex(
            (item) => item == profile
          );
          if (profileIndex == -1) {
            clickedProfiles.push(profile);
            var countElement = document.getElementById("count-notification");
            console.log(countElement.textContent);
            countElement.textContent = countElement.textContent - 1;
          }
        }
      });
    } else {
      notif_text_content.className = "notif-text";

      notif_text_content.addEventListener("click", function (event) {
        var clickedElement = event.target;
        var notifTextParent = findNotifTextParent(clickedElement);
        if (notifTextParent) {
          //   notifTextParent.style.backgroundColor = "white";
          let profile = markAsRead(notifTextParent);
          console.log("----", profile);
          let profileIndex = clickedProfiles.findIndex(
            (item) => item == profile
          );
          if (profileIndex == -1) {
            clickedProfiles.push(profile);
            var countElement = document.getElementById("count-notification");
            console.log(countElement.textContent);
            countElement.textContent = countElement.textContent - 1;
          }
        }
      });
    }
    var image = document.createElement("img");
    image.src = reaction.imageSrc;
    image.alt = reaction.name;
    image.style.width = "50px";
    image.style.height = "50px";

    var firstParagraph = document.createElement("p");
    firstParagraph.style.width = "100%";
    firstParagraph.style.marginBottom = "0rem";
    var first_para_div = document.createElement("div");
    var first_para_parent = undefined;
    if (reaction.isPhoto) {
      first_para_parent = document.createElement("div");
    }
    first_para_div.className = "para-div";

    var first_span = document.createElement("span");
    first_span.className = "title";
    first_span.id = "title-name";
    first_span.style.fontSize = "18px";
    first_span.textContent = reaction.name;

    var first_p1 = document.createElement("p");
    first_p1.textContent = reaction.message;
    first_p1.className = "description-ntf";

    if (reaction.boldText) {
      var first_p2 = document.createElement("p");
      first_p2.className = "title text-ntf";
      first_p2.style.paddingLeft = "1rem";
      first_p2.textContent = reaction.boldText;
    }

    var first_p3 = document.createElement("p");
    first_p3.style.color = "#b0b3ba";
    first_p3.style.marginTop = "0rem";
    first_p3.textContent = reaction.postDate;

    var first_notification_point = document.createElement("span");
    first_notification_point.className = "notification-point";
    first_notification_point.textContent = ".";

    var text_message_div = undefined;

    if (reaction.isMessage) {
      text_message_div = document.createElement("div");
      var paragraph_message = document.createElement("p");
      paragraph_message.textContent = reaction.textMessage;
      paragraph_message.className = "text-msg";
      text_message_div.appendChild(paragraph_message);
    }

    first_para_div.appendChild(first_span);
    first_para_div.appendChild(first_p1);
    if (reaction.boldText) {
      first_para_div.appendChild(first_p2);
    }
    if (!reaction.isMessage) {
      first_para_div.appendChild(first_notification_point);
    }

    var first_notification_photo = undefined;
    if (reaction.isPhoto) {
      first_notification_photo = document.createElement("img");
      first_notification_photo.src = reaction.notifImg;
      first_notification_photo.alt = reaction.name;
      first_notification_photo.style.width = "50px";
      first_notification_photo.style.height = "50px";
      first_notification_photo.style.cursor = "pointer";
    }

    // if(first_notification_photo != undefined){
    //     first_para_div.appendChild(first_notification_photo)
    // }

    first_para_div.appendChild(first_p3);
    if (text_message_div != undefined) {
      first_para_div.appendChild(text_message_div);
    }
    if (reaction.isPhoto) {
      if (first_notification_photo != undefined) {
        var photo_parent = document.createElement("div");
        photo_parent.appendChild(first_notification_photo);
      }
      first_para_parent.appendChild(first_para_div);
      first_para_parent.appendChild(photo_parent);
      first_para_parent.style.display = "flex";
      firstParagraph.appendChild(first_para_parent);
    } else {
      firstParagraph.appendChild(first_para_div);
    }

    notif_text_content.appendChild(image);
    notif_text_content.appendChild(firstParagraph);
    notificationDiv.appendChild(notif_text_content);
  });
});

function markAsAllRead() {
  var countElement = document.getElementById("count-notification");
  console.log(countElement.textContent);
  countElement.textContent = 0;
  reactions.forEach((reaction) => {
    if (!reaction.isChecked) {
      reaction.isChecked = true;
      var notifTextElements = document.querySelectorAll(".notif-text");
      notifTextElements.forEach((element) => {
        element.classList.add("white-background");
      });
      var notif = document.querySelectorAll(".notification-point");
      notif.forEach((element) => {
        element.classList.add("hide-notif-button");
      });

      var text_message = document.querySelectorAll(".text-msg");
      text_message.forEach((element) => {
        element.classList.add("white-background-txt-msg");
      });
    }
  });
}

function markAsRead(element) {
  var profileName = null; // Initialize profileName to null

  if (element.classList.contains("title")) {
    let profile = element.innerText;
    let profileIndex = reactions.findIndex((item) => item.name == profile);
    if (profileIndex != -1) {
      profileName = reactions[profileIndex].name;
    }
  } else if (element.classList.contains("text-msg")) {
    element.className = "white-background-txt-msg";
  }

  // Traverse through child elements
  for (let i = 0; i < element.children.length; i++) {
    const childProfileName = markAsRead(element.children[i]); // Get profileName from child
    if (childProfileName !== null) {
      profileName = childProfileName; // Update profileName if it's not null
    }
  }

  element.style.backgroundColor = "white";
  return profileName; // Return the profileName from the current element
}

function findNotifTextParent(element) {
  while (element) {
    if (
      element.classList.contains("notif-text") ||
      element.classList.contains("text-read-message")
    ) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
}

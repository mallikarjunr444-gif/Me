/**
 * ==============================================================================
 * CUTTING BOARD MAT PHOTOS & CARDS CONFIGURATION
 * ==============================================================================
 * You can easily customize, add, delete, or replace photos on the Cutting Board!
 * 
 * HOW TO USE:
 * 1. To replace a photo:
 *    Put your image in `public/images/your-photo.jpg` and change the `image` field:
 *    `image: "/images/your-photo.jpg"`
 * 
 * 2. To delete/hide a photo:
 *    Set `visible: false` or delete the object from the array.
 * 
 * 3. To add a new photo:
 *    Add an object with `{ title: "My Project", image: "/images/my-pic.jpg", visible: true }`.
 * ==============================================================================
 */

export const cuttingBoardData = [
  {
    id: "slot-1",
    title: "Pack App",
    image: "assets/images/0pNvbqriNrL1D2jxTeMwqGMPVo.png", // Replace with your image e.g. "/images/my-app.jpg"
    position: "Top Left Phone Card",
    visible: true
  },
  {
    id: "slot-2",
    title: "Code Editor / System Architecture",
    image: "assets/images/cqrOEukUtJ5q6innagqIo1y7ig.png",
    position: "Top Middle Code Card",
    visible: true
  },
  {
    id: "slot-3",
    title: "Live Stream Platform",
    image: "assets/images/CMfmtNsS4WRTLeJcQt1lujXYM.png",
    position: "Top Right Stream Card",
    visible: true
  },
  {
    id: "slot-4",
    title: "Who's Speaking / Conference",
    image: "assets/images/FRkj7J6yOqj9bBSMBJF7zdRGrY.png",
    position: "Middle Left Card",
    visible: true
  },
  {
    id: "slot-5",
    title: "Appointments & Clinic Workflow",
    image: "assets/images/EYbfG6roNwIxhPystqzDKOK4.png",
    position: "Center Grid Card",
    visible: true
  },
  {
    id: "slot-6",
    title: "Race Platform & Timeline",
    image: "assets/images/0Kj6KlVZPILk9uoSPK7tmq8hGJU.png",
    position: "Middle Right Timeline Card",
    visible: true
  },
  {
    id: "slot-7",
    title: "Logistics & Shipping Dashboard",
    image: "assets/images/raBEoGeB7wmHSyDXXPu6VzQPAg.png",
    position: "Bottom Left Logistics Card",
    visible: true
  },
  {
    id: "slot-8",
    title: "Retro 2048 Terminal",
    image: "assets/images/zbVoYsGmG4nEEedbtgkv5193W6I.png",
    position: "Bottom Middle Browser Card",
    visible: true
  },
  {
    id: "slot-9",
    title: "Mobile App Screen",
    image: "assets/images/X8TlTAmfaqh8FaOYxjSjYMniaE.png",
    position: "Bottom Right Mobile Card",
    visible: true
  }
];

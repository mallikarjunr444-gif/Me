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
 *    Set `visible: false`
 *
 * 3. To add a new photo:
 *    Add an object with `{ title: "My Project", image: "/images/my-pic.jpg", visible: true }`.
 * ==============================================================================
 */

export const cuttingBoardData = [
  {
    id: "slot-1",
    title: "Hackathon Award & Team",
    image: "/images/mallikarjun-award-team.jpg",
    position: "Top Left Phone Card",
    visible: true
  },
  {
    id: "slot-2",
    title: "Project Exhibition - DSATM",
    image: "/images/mallikarjun-certificate-dsatm.jpg",
    position: "Top Middle Code Card",
    visible: true
  },
  {
    id: "slot-3",
    title: "ISRO Hackathon 2026",
    image: "/images/mallikarjun-certificate-isro.png",
    position: "Top Right Stream Card",
    visible: true
  },
  {
    id: "slot-4",
    title: "Project 4",
    image: "",  // Add your image: "/images/your-photo-4.jpg"
    position: "Middle Left Card",
    visible: true
  },
  {
    id: "slot-5",
    title: "Project 5",
    image: "",  // Add your image: "/images/your-photo-5.jpg"
    position: "Center Grid Card",
    visible: true
  },
  {
    id: "slot-6",
    title: "Project 6",
    image: "",  // Add your image: "/images/your-photo-6.jpg"
    position: "Middle Right Timeline Card",
    visible: true
  },
  {
    id: "slot-7",
    title: "Project 7",
    image: "",  // Add your image: "/images/your-photo-7.jpg"
    position: "Bottom Left Logistics Card",
    visible: true
  },
  {
    id: "slot-8",
    title: "Project 8",
    image: "",  // Add your image: "/images/your-photo-8.jpg"
    position: "Bottom Middle Browser Card",
    visible: true
  },
  {
    id: "slot-9",
    title: "Project 9",
    image: "",  // Add your image: "/images/your-photo-9.jpg"
    position: "Bottom Right Mobile Card",
    visible: true
  }
];

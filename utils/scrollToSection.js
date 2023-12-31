export const scrollToSection = (section) => {
  if (typeof document !== "undefined") {
    const workSection = document.getElementById(`${section}`);
    if (workSection) {
      workSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};
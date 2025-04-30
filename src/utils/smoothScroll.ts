
export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  
  if (section) {
    const yOffset = -80; // Offset for fixed header
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
};

export const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
  e.preventDefault();
  scrollToSection(sectionId);
};

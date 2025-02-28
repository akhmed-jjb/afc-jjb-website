import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'COURS',
      href: '/#cours',
    },
    {
      text: 'PLANNING',
      href: '/#planning',
    },
    {
      text: 'ÉQUIPE',
      href: '/#equipe',
    },
    {
      text: 'GALERIE',
      href: '/galerie',
    },
    {
      text: 'INFOS PRATIQUES',
      href: '/#infos-pratiques',
    },
    {
      text: 'CONTACT',
      href: '/contact',
    },
  ],
};



export const footerData = {
  links: [
    
    {
      title: 'CONTACT',
      links: [
        { text: 'AFC JJB' },
        { text: '06 46 06 22 51', href: 'tel:0646062251' },
        { text: 'afc.jjb@outlook.fr', href: 'mailto:afc.jjb@outlook.fr' },
      ],
    },
    {
      title: 'PLANNING',
      links: [
        { text: 'Dojo Ergué-Armel', href: '/#planning' },
        { text: 'Salle de MPT Penhars', href: '/#planning' },
      ],
    },
    
    {
      title: 'DISCIPLINES',
      links: [
        { text: 'JJB', href: '/#jjb' },
        { text: 'Grappling', href: '/#grappling' },
        { text: 'Pancrace', href: '/#pancrace' },
      ],
    },
    
    {
      title: 'LE CLUB',
      links: [
        { text: 'Entraîneurs', href: '/#equipe' },
        { text: 'Galerie', href: '/galerie' },
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],

  secondaryLinks: [
    { text: 'Conditions', href: getPermalink('/conditions') },
    { text: 'Confidentialité', href: getPermalink('/confidentialite') },
  ],
  

  socialLinks: [

    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/afc_jjb/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/1794363377995046' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@afc_jjb' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/akhmed-jjb/afc-jjb-website' },
  ],
  footNote: `
<span class="text-gray-500 text-sm">
    Réalisé par <span class="text-blue-600 dark:text-muted">Abdoulaev Fighters Club JJB</span> · Tous droits réservés.
</span>
`,
};

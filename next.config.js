const h=[{protocol:'https',hostname:'images.unsplash.com'}];
try{h.push({protocol:'https',hostname:new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname})}catch{}
module.exports={images:{remotePatterns:h}};

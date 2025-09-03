# Mapas mentales (ASCII)

## Flujo de render con App Router

Client Req
   |
   v
[ Middleware ] --(rewrite/redirect?)--> [ Route Match ]
   |                                     |            
   |                                  [layout.tsx]    
   |                                     |            
   |                                  [page.tsx]      
   |                                  /   |   \       
   |                   [RSC fetch/cache]  |  [Suspense boundaries]
   |                                       \         / 
   |                                        [Streaming HTML]
   v
[ Respuesta ] -> hidrata client components si existen

## Datos + ISR + Tags

[DB/API] -> fetch({ next: { revalidate: 60, tags: ['posts'] } })
   |            |
   |            +--> cache entry (tags: posts)
   |                       |
   |                       +-- revalidateTag('posts') (mutación) => invalida
   v
[RSC] -> render -> HTML stream


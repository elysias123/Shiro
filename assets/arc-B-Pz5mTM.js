import{w as ln,c as z}from"./path-CbwjOpE9.js";import{p as rn,f as G,g as q,h as un,j as g,t as on,k as K,m as _,l as an,n as t,o as sn,q as tn,r as fn}from"./isEmpty-C2NQZFK9.js";function cn(l){return l.innerRadius}function gn(l){return l.outerRadius}function yn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,E,j,v,A,B,r){var I=E-l,i=j-h,n=B-v,m=r-A,u=m*I-n*i;if(!(u*u<g))return u=(n*(h-A)-m*(l-v))/u,[l+u*I,h+u*i]}function V(l,h,E,j,v,A,B){var r=l-E,I=h-j,i=(B?A:-A)/K(r*r+I*I),n=i*I,m=-i*r,u=l+n,s=h+m,f=E+n,c=j+m,C=(u+f)/2,o=(s+c)/2,p=f-u,y=c-s,R=p*p+y*y,T=v-A,P=u*c-f*s,O=(y<0?-1:1)*K(tn(0,T*T*R-P*P)),S=(P*y-p*O)/R,k=(-P*p-y*O)/R,w=(P*y+p*O)/R,d=(-P*p+y*O)/R,x=S-C,e=k-o,a=w-C,F=d-o;return x*x+e*e>a*a+F*F&&(S=w,k=d),{cx:S,cy:k,x01:-n,y01:-m,x11:S*(v/T-1),y11:k*(v/T-1)}}function vn(){var l=cn,h=gn,E=z(0),j=null,v=yn,A=mn,B=pn,r=null,I=ln(i);function i(){var n,m,u=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-un,c=A.apply(this,arguments)-un,C=an(c-f),o=c>f;if(r||(r=n=I()),s<u&&(m=s,s=u,u=m),!(s>g))r.moveTo(0,0);else if(C>on-g)r.moveTo(s*G(f),s*q(f)),r.arc(0,0,s,f,c,!o),u>g&&(r.moveTo(u*G(c),u*q(c)),r.arc(0,0,u,c,f,o));else{var p=f,y=c,R=f,T=c,P=C,O=C,S=B.apply(this,arguments)/2,k=S>g&&(j?+j.apply(this,arguments):K(u*u+s*s)),w=_(an(s-u)/2,+E.apply(this,arguments)),d=w,x=w,e,a;if(k>g){var F=sn(k/u*q(S)),L=sn(k/s*q(S));(P-=F*2)>g?(F*=o?1:-1,R+=F,T-=F):(P=0,R=T=(f+c)/2),(O-=L*2)>g?(L*=o?1:-1,p+=L,y-=L):(O=0,p=y=(f+c)/2)}var H=s*G(p),J=s*q(p),M=u*G(T),N=u*q(T);if(w>g){var Q=s*G(y),U=s*q(y),W=u*G(R),X=u*q(R),D;if(C<rn)if(D=dn(H,J,W,X,Q,U,M,N)){var Y=H-D[0],Z=J-D[1],$=Q-D[0],b=U-D[1],nn=1/q(fn((Y*$+Z*b)/(K(Y*Y+Z*Z)*K($*$+b*b)))/2),en=K(D[0]*D[0]+D[1]*D[1]);d=_(w,(u-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}O>g?x>g?(e=V(W,X,H,J,s,x,o),a=V(Q,U,M,N,s,x,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),!o),r.arc(a.cx,a.cy,x,t(a.y11,a.x11),t(a.y01,a.x01),!o))):(r.moveTo(H,J),r.arc(0,0,s,p,y,!o)):r.moveTo(H,J),!(u>g)||!(P>g)?r.lineTo(M,N):d>g?(e=V(M,N,Q,U,u,-d,o),a=V(H,J,W,X,u,-d,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,u,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),o),r.arc(a.cx,a.cy,d,t(a.y11,a.x11),t(a.y01,a.x01),!o))):r.arc(0,0,u,T,R,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[G(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:z(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:z(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:z(+n),i):E},i.padRadius=function(n){return arguments.length?(j=n==null?null:typeof n=="function"?n:z(+n),i):j},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:z(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:z(+n),i):A},i.padAngle=function(n){return arguments.length?(B=typeof n=="function"?n:z(+n),i):B},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as d};

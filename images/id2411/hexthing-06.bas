option explicit

mode 1,8

const nnn=6
const xmax = 16
const ymax = 14
const radius = 25
dim xx(nnn)
dim yy(nnn)
dim bane(xmax, ymax)
dim center.x(xmax, ymax)
dim center.y(xmax, ymax)

dim dx, dy, i, yoff, xoff, xxx, angle
dim integer xpos=400, ypos=400
dim felt, bgcol
dim dist.d, dist.dx, dist.dy, temp, tx, ty
dim over.d, over.dx, over.dy
dim count=0
dim finish=0
dim bane.nr=101
dim bane.slut=0 

setpin 31, DOUT
spi open 195315, 0, 16
page write 0
sprite close all
cls
box 0,0,10,10,,rgb(red), rgb(red)
sprite read 64,0,0,10,10

controller mouse open 2, left_mouse
settick 20, myint



bane.nr=101 

  page write 1
  init_bane bane.nr
do  
    execute_bane
    if finish=0 then
      inc bane.nr
      init_bane bane.nr
    end if
    if bane.slut=1 then
      end
    end if
loop while not keydown(1)


sub execute_bane
  page copy 1 to 0
  cls
  dist.d = 100000
  dist.dx = -1
  dist.dy = -1
  finish=0
  for dy=0 to ymax
    for dx=0 to xmax
      if bane(dx,dy)<>0 then
        tx = center.x(dx,dy) - xpos        
        ty = center.y(dx,dy) - ypos
        temp = tx*tx + ty*ty
        if temp < dist.d then
          dist.d = temp
          dist.dx = dx
          dist.dy = dy          
        endif
        render_tile dx, dy
        if bane(dx,dy)<>0 and bane(dx,dy)<>2 then
          inc finish
        endif
      endif
    next dx
  next dy

  if (dist.dx >= 0) and (dist.dy >= 0) and dist.d < 625 then
    render_tile dist.dx, dist.dy
    over.d = dist.d
    over.dx = dist.dx
    over.dy = dist.dy
'    text 100,100, str$(over.dx),,,,rgb(red)
'    text 100,110, str$(bane(over.dx,over.dy)),,,,rgb(red)
  else
    over.d = 1000000
  endif
  text 10,10, "MOVES: "+str$(count),,,,rgb(green)
  text 90,10, "TILES LEFT: "+str$(finish),,,,rgb(green)
  sprite write 64, xpos, ypos
end sub

'init map
sub init_bane bane_nr
  restore
  for dy=0 to ymax
    for dx=0 to xmax
      bane(dx,dy) = 0
  next dx, dy

  do
    read temp
  loop while temp <> bane_nr and temp<>999

  if temp=999 then
    bane.slut=1
  else
    for dy=0 to ymax
      yoff = dy*radius*1.5
      xxx  = sqr(3)/2*radius*(dy mod 2)
      for dx=0 to xmax
        read bane(dx,dy)
        select case bane(dx,dy)
          case -1
            bane(dx,dy) = 0
            dx=xmax
          case -2
            bane(dx,dy) = 0
            dx=xmax
            dy=ymax
        end select
        xoff = dx*radius*sqr(3)+xxx
        center.x(dx,dy) = 1.75*radius+xoff
        center.y(dx,dy) = 1.5*radius+yoff
    next dx, dy
  end if
end sub

'render a tile
sub render_tile (dx, dy)
  if dx>=0 and dx<xmax and dy>=0 and dy<ymax then
    for i=0 to nnn
      angle = 2*pi*i/nnn + pi/nnn
      xx(i) = center.x(dx,dy)+radius*cos(angle)
      yy(i) = center.y(dx,dy)+radius*sin(angle)
    next i
    select case bane(dx,dy)
      case 1
        polygon nnn, xx(), yy(), rgb(white), rgb(gray)
      case 2
        polygon nnn, xx(), yy(), rgb(white), rgb(orange)
      case 3
        polygon nnn, xx(), yy(), rgb(white), rgb(gray)
        for i=0 to nnn
          angle = 2*pi*i/nnn + pi/nnn
          xx(i) = center.x(dx,dy)+0.75*radius*cos(angle)
          yy(i) = center.y(dx,dy)+0.75*radius*sin(angle)
        next i
        polygon nnn, xx(), yy(), rgb(pink), rgb(gray)
    end select        
  end if
end sub

' mouse interrupt
sub myint
  xpos = mouse(x,2)
  ypos = mouse(y,2)
end sub

'left mouse callback routine
sub left_mouse
  if over.d < 625 then
    flip_tile over.dx, over.dy
    flip_tile over.dx-1, over.dy
    flip_tile over.dx+1, over.dy
    flip_tile over.dx, over.dy+1
    flip_tile over.dx, over.dy-1
    if (over.dy mod 2) = 0 then
      flip_tile over.dx-1, over.dy-1
      flip_tile over.dx-1, over.dy+1
    else
      flip_tile over.dx+1, over.dy-1
      flip_tile over.dx+1, over.dy+1
    end if
    inc count
  end if
end sub

'flip tile
sub flip_tile dx, dy
  if dx>=0 and dx<xmax and dy>=0 and dy<ymax then
    select case bane(dx,dy)
      case 1
        bane(dx,dy) = 2
      case 2
        bane(dx,dy) = 1
      case 3
        bane(dx,dy) = 1
    end select        
  endif
end sub




'kode betydning
'   0 feltet slukket
'   1 graat felt
'   2 orange felt 
'  -1 slutter linjen
'  -2 slutter banen
' 1xx bane nr xx starter her
' 999 end of data
'
'    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6
' bane 1...
data 101
data -1, -1, -1, -1, -1, -1
data 0,0,0,0,0,0,1,1,-1
data 0,0,0,0,0,1,1,1,-1
data 0,0,0,0,0,0,1,1,-2
' bane 2...
data 102
data -1, -1, -1
data 0,0,0,0,0,1,-1
data 0,0,0,0,0,1,-1
data 0,0,0,0,0,3,-1
data 0,0,0,0,0,1,-1
data 0,0,0,0,0,1,-2
' bane 3...
data 103
data -1, -1, -1
data 0,0,0,0,0,1,-1
data 0,0,0,0,0,1,-1
data 0,0,0,1,1,3,1,1,-1
data 0,0,0,0,0,1,-1
data 0,0,0,0,0,1,-2
' the end
data 999




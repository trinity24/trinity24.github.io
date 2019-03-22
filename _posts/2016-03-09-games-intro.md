---
layout: post
title:  Nim- A Surprisingly Important Game (2)
date:   2016-03-09
categories: posts
research: false 
---

### Combinatorial games

Most of us have been playing **combinatorial games** our whole lives and never knew it. These are games where two players alternate turns and know all relevant information to decide how to play next. Furthermore, let's consider combinatorial games that are **impartial**, which means the only difference between the players is who makes the first move. These games will have an **ending condition**, and as the name suggests, this will ensure that the game ends. When a player wins if and only if they make the last move, the game is said to be **normal**.

Every position in an impartial game can be categorized as either an **N-position** or a **P-position**. In an N-position, the next player to move can exercise a winning strategy; similarly in a P-position, the previous player to move can exercise a winning strategy. A player has a **winning strategy** if no matter what the opponent does, the player has a set of rules to follow which guarantee they win the game.

You can probably think of tons of classic combinatorial games that you played since you were a kid, like tic-tac-toe, checkers, or nim. I really hope you didn't play nim as a child.

![sad](\assets\sad-kid.png)

### Nim

In the game [**nim**](https://en.wikipedia.org/wiki/Nim), two players alternate taking items from different piles. There can be any (finite) number of piles, and the piles can have any (finite) number of items in them. At each turn, a player must remove at least one item, and all items removed must come from the same pile. The goal of nim is to be the last player to take an object (in other words, your opponent is unable to make a move because all piles are empty).

A game is **determined** if from any starting position for the game, one of the players has a winning strategy. The version of nim I've described is determined and normal.

#### A subtraction game example  

I'll provide an example for how to calculate N and P positions for a combinatorial game because it helps to show how winning strategies are derived.

![kiss](\assets\kiss_row.png)

Consider the following game between two players. There is a set of $$n$$ hershey kisses, and each player can remove 1, 3, or 4 hershey kisses on their turn. The player to make the last move wins. I've labeled, with short explanations, whether a stack of $$n$$ hershey kisses is an N or P position in this game, when $$n$$ is between 0 and 11.

- 0: The *previous* player to move took the last kiss and won.

- 1, 3, 4: The *next* player to move can take all the candy and wins.

- 2: The *previous* player takes the last kiss after the next player leaves exactly 1 kiss.

- 5: After a move on 5 kisses, there are 1, 2 or 4 kisses left. The *next* player can take 3 kisses, so they become the previous player on a game with 2 kisses.

- 6: After a move on 6 kisses, there are 2, 3 or 5 kisses left. The *next* player can take 4 kisses, so they become the previous player on a game with 2 kisses.

- 7: After a move on 7 kisses, there are 3, 4, or 5 kisses left. On all the these positions the next player to move wins, so here the *previous* player to move wins.

- 8,10,11: From these positions, the *next* player to move can leave 7 kisses.

- 9: After a move on 9 kisses, there are 5, 6, or 8 kisses left. On all the these positions the next player to move wins, so here the *previous* player to move wins.

The pattern established above for N and P positions can be proved inductively to extend for any set of natural numbers. So you could conclude that the second player has a winning strategy when the number of hershey kisses divided by 7 leaves a remainder of 0 or 2. Below is a diagram illustrating the pattern, where an arrow between two positions illustrates a possible move.

![Positions](\assets\PN_positions.png)

This example demonstrates how to characterize N-positions and P-positions in a game. They are defined recursively as such:

1. An ending position is a P-position.

2. From every P-position, all the moves are to  N-positions.

3. From every N-position, there exists a move to a P-position.



#### Back to nim

So how do you win nim? If you don't already know how this winning strategy goes, [try a few rounds here](https://www.archimedes-lab.org/game_nim/play_nim_game.html), and see if you can figure it out.

![nim](\assets\nim.png)

First, let's define **nim-sum**, but [turn to your old friend](https://en.wikipedia.org/wiki/Exclusive_or) if you forget, or never knew, what the *xor* operation is. When $$n$$ numbers, $$x_1,\cdots, x_n$$, are written in their binary representation, the nim-sum of them is just $$ x_1 \oplus x_2 \oplus \cdots \oplus x_n$$.

### Bouton's theorem

Whether the first player to move has the winning strategy depends exactly on the size of the piles. The following theorem was due to [Charles Bouton](https://en.wikipedia.org/wiki/Charles_L._Bouton).

**Theorem** The second player has a winning strategy to a game of nim if and only if the nim-sum of the piles is 0.

When the nim-sum of the piles is 0, the winning strategy for the second player is to make moves which turn in nim-sum of the piles to 0 at each turn. When in the nim-sum of the piles is nonzero, the winning strategy for the first player is to make moves which turn in nim-sum of the piles to 0 at each turn.

#### Proof

In a state of nim with $$k$$ piles, let $$x_i$$ be the binary representation for the size of the $$i^{th}$$ pile. After a move is made, denote the binary representation for the size of the $$i^{th}$$ pile by $$x'_i$$. Remember that during a move, items can only be taken from 1 pile, so only one pile's size is different than it was before the move. Therefore $$x_i=x'_i$$ for all $$i$$ except for exactly one pile, let's call that pile $$i^* $$. Also, note that because we removed items from pile $$i^* $$, $$ x_{i^* } < x_i$$.

 3 lemmas are needed for the theorem. They use the facts that $$\oplus$$ on $$\{0,1\}^m$$ (the set of binary strings of length $$m$$) forms an Abelian group. If you don't speak algebra, $$\oplus$$ on $$\{0,1\}^m$$ is associative, commutative, has identity $$\{0,0, \cdots, 0\}$$, and has a unique additive inverse for every element in $$\{0,1\}^m$$. Regarding the additive inverse, for any number $$y \in \{0,1\}^m$$, $$y \oplus y=0$$. These facts are all easily verifiable if you've got any doubts.  

For brevity, let $$X=x_1 \oplus x_2 \oplus \cdots \oplus x_n$$ and $$X'=x'_1 \oplus x'_2 \oplus \cdots \oplus x'_n$$.

**Lemma 1** The nim-sum after a move is $$X'=X \oplus (x_{i^*} \oplus x'_{i^* }) $$.

The proof follows as such, only relying on the properties defined above for $$\oplus$$ on $$\{0,1\}^m$$.

$$\begin{align*}
  \text{nim-sum after a move }&= X'=  0 \oplus X' \\
  &=  \left (X \oplus X \right) \oplus X' = X \oplus  \left ( X  \oplus X'\right)\\
  &= X \oplus (x_1 \oplus x'_1) \oplus (x_2 \oplus x'_2) \oplus \cdots \oplus (x_n \oplus x'_n)\\
  &=X \oplus 0 \oplus \cdots \oplus (x_{i^*} \oplus x'_{i^*})\oplus \cdots \oplus 0\\
  &= X \oplus (x_{i^*} \oplus x'_{i^*})
\end{align*}
$$

**Lemma 2** If  $$ x_1 \oplus x_2 \oplus \cdots \oplus x_n=0$$, then $$ x'_1 \oplus x'_2 \oplus \cdots \oplus x'_n \neq 0$$ no matter what move is made.


This means that if the nim-sum in some stage of a game of nim is 0, it cannot be 0 after a move is made (except in the obvious case where there are no more moves left).

From Lemma 1, $$X'=X \oplus (x_{i^*} \oplus x'_{i^*})$$, but here $$X=0$$. Thus $$X'=x_{i^*} \oplus x'_{i^*}$$. We required that $$x'_{i^*} \neq x_{i^*}$$, because it is the unique pile which had items removed in this move. Therefore, $$x_{i^*} \oplus x'_{i^*} \neq 0$$, because  $$x_{i^*}$$'s unique additive inverse was itself. So if the nim-sum before a move is 0, the nim-sum after that move is not 0.

**Lemma 3** If  $$ x_1 \oplus x_2 \oplus \cdots \oplus x_n \neq 0$$, then there exists some move such that$$ x'_1 \oplus x'_2 \oplus \cdots \oplus x'_n =0$$. This means that if the nim-sum in some stage of a game of nim is not 0, there is some move that can be made so that after the move, the nim-sum is 0.

We know $$X$$ is not 0, so there is some bit of $$X$$ which is 1. Let $$b$$ be the leftmost bit of $$X$$ which is 1. Also, choose $$x_{i^*}$$ so that the $$b^{th}$$ bit of $$x_{i^* }$$ is also 1 (such an $$x_{i^* }$$ must exist in order for $$X$$ to have a 1 in its $$b^{th}$$ bit). Set $$x'_{i^ * }=X \oplus x_{i^* }$$.

$$X \oplus x_{i^* }$$ has a 0 in its $$b^{th}$$ bit, and $$b$$ was the leftmost bit of $$X$$ which is 1. So in $$X \oplus x_{i^* }$$, the leftmost bit with a 1 in it  is to the right of $$b$$. This implies that $$x'_{i^ * }$$ decreased by $$2^b$$. The bits to the right of $$b$$ may change, but this could add at most $$2^b-1$$ to $$x'_{i^ * }$$. Therefore we see $$x'_{i^ * } < x_{i^ * }$$. So a player can make a move by taking $$x_{i^*}-x'_{i^ * }$$ objects from heap $$i^*$$. We wish to find the nim-sum after this move, and will make use of Lemma 1 again:

$$
\begin{align*}
  \text{nim-sum after move }&= X \oplus (x_{i^*} \oplus x'_{i^*}) = X \oplus (x_{i^*} \oplus X \oplus x_{i^* }) \\
  &= (X \oplus X) \oplus (x_{i^*} \oplus x_{i^* })= 0 \oplus 0=0
\end{align*}
$$

So if the nim-sum in not 0, there is some move that can be made so that after the move, the nim-sum is 0.

Combining Lemmas 2 and 3, we conclude that when the nim-sum of a stage of the game is 0, the next move will always make it nonzero, and when the nim-sum of a stage of the game is nonzero, there exists some move to make to nim-sum 0.

### To be continued


What does this mean? If the nim-sum is nonzero at the start of a game, player 1 can move to make it zero. No matter what player 2 does, player 1 is always able to make the nim-sum 0 again on their turn. Player 1 will always be able to make the last move as long as in each turn, they remove items from a pile to make the nim-sum 0. The number of items in play is strictly decreasing. So eventually, the move from player 1 to make the nim-sum 0, is the move which makes all the piles empty.

 If the nim-sum is 0, then no matter what player 1 does, player 2 is always able to make the nim-sum 0 again on their turn. From the same discussion as the one above, we see that player 2 will win.

Nim doesn't seem very "fun" in the typical sense, or at least I wouldn't expect 6 year olds to be playing it on the back of their kids menu at a restaurant. But enter the Sprague Grundy theorem and things get cool. This theorem states that any impartial game is equivalent to a game of nim with some associated "nimber". Check out my post on the **Sprague-Grundy theorem** to see why this is true.

class TrieNode {
    constructor() {
        this.end = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode();
            }

            node = node.children[word[i]];
        }

        node.end = true;
    }

    search(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) {
                node = node.children[word[i]];
            } else {
                return false;
            }
        }

        return node.end;
    }

    suggestions(prefix) {
        let node = this.root;

        // Traverse the trie to the end of the prefix
        for (let char of prefix) {
            if (!node.children[char]) {
                return []; // Prefix not found
            }
            node = node.children[char];
        }

        // Perform DFS to collect all suggestions
        const results = [];
        const dfs = (currentNode, path) => {
            if (currentNode.end) {
                results.push(path);
            }
            for (let [char, childNode] of Object.entries(currentNode.children)) {
                dfs(childNode, path + char);
            }
        };

        dfs(node, prefix);
        return results;
    }
}

// Optional export
module.exports = Trie;